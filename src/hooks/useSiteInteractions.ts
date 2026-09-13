"use client";

import { useEffect } from "react";

export function useSiteInteractions() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const backToTopBtn = document.getElementById("backToTop");

    const onScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }

      if (window.scrollY > 400) {
        backToTopBtn?.classList.add("visible");
      } else {
        backToTopBtn?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    const onBackToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    backToTopBtn?.addEventListener("click", onBackToTop);

    const mobileToggle = document.getElementById("mobileToggle");
    const mobileDrawer = document.getElementById("mobileNavDrawer");

    const toggleMobileNav = () => {
      mobileToggle?.classList.toggle("open");
      mobileDrawer?.classList.toggle("active");
      document.body.style.overflow = mobileDrawer?.classList.contains("active")
        ? "hidden"
        : "";
    };

    mobileToggle?.addEventListener("click", toggleMobileNav);

    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    const onMobileNavLinkClick = () => {
      if (mobileDrawer?.classList.contains("active")) {
        toggleMobileNav();
      }
    };
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", onMobileNavLinkClick);
    });

    const slider = document.getElementById("bannersSlider");
    const slides = document.querySelectorAll(".banner-slide");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    const indicatorsContainer = document.getElementById("carouselIndicators");

    let currentSlide = 0;
    let autoSlideTimer: ReturnType<typeof setInterval> | null = null;
    const totalSlides = slides.length;
    let wrapper: Element | null = null;
    let onMouseEnter: (() => void) | null = null;
    let onMouseLeave: (() => void) | null = null;
    let onTouchStart: ((e: Event) => void) | null = null;
    let onTouchEnd: ((e: Event) => void) | null = null;
    let onPrev: (() => void) | null = null;
    let onNext: (() => void) | null = null;

    if (slider && indicatorsContainer && totalSlides > 0) {
      indicatorsContainer.innerHTML = "";
      slides.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.classList.add("indicator-dot");
        if (idx === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(idx));
        indicatorsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll(".indicator-dot");

      const updateSlider = () => {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentSlide);
        });
      };

      const goToSlide = (index: number) => {
        currentSlide = (index + totalSlides) % totalSlides;
        updateSlider();
        resetAutoSlide();
      };

      const nextSlide = () => goToSlide(currentSlide + 1);
      const prevSlide = () => goToSlide(currentSlide - 1);
      onNext = nextSlide;
      onPrev = prevSlide;

      nextBtn?.addEventListener("click", nextSlide);
      prevBtn?.addEventListener("click", prevSlide);

      const startAutoSlide = () => {
        autoSlideTimer = setInterval(nextSlide, 5000);
      };

      const resetAutoSlide = () => {
        if (autoSlideTimer) clearInterval(autoSlideTimer);
        startAutoSlide();
      };

      startAutoSlide();

      wrapper = document.querySelector(".banners-carousel-wrapper");
      onMouseEnter = () => {
        if (autoSlideTimer) clearInterval(autoSlideTimer);
      };
      onMouseLeave = startAutoSlide;
      wrapper?.addEventListener("mouseenter", onMouseEnter);
      wrapper?.addEventListener("mouseleave", onMouseLeave);

      let startX = 0;
      let endX = 0;

      onTouchStart = (e: Event) => {
        const te = e as TouchEvent;
        startX = te.touches[0].clientX;
      };
      onTouchEnd = (e: Event) => {
        const te = e as TouchEvent;
        endX = te.changedTouches[0].clientX;
        if (startX - endX > 50) nextSlide();
        if (endX - startX > 50) prevSlide();
      };

      slider.addEventListener("touchstart", onTouchStart, { passive: true });
      slider.addEventListener("touchend", onTouchEnd, { passive: true });
    }

    const tabBtns = document.querySelectorAll(".tab-btn");
    const streamCards = document.querySelectorAll<HTMLElement>(".stream-card");

    const onTabClick = (btn: Element) => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      streamCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          card.style.animation = "fadeIn 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    };

    const tabListeners: Array<[Element, () => void]> = [];
    tabBtns.forEach((btn) => {
      const handler = () => onTabClick(btn);
      btn.addEventListener("click", handler);
      tabListeners.push([btn, handler]);
    });

    const statNumbers = document.querySelectorAll(".stat-number");

    const animateCounters: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const targetValue = parseInt(target.getAttribute("data-count") || "0", 10);
          const suffix = target.getAttribute("data-suffix") || "";
          let startValue = 0;
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = targetValue / steps;

          const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= targetValue) {
              target.textContent = targetValue.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(startValue).toLocaleString() + suffix;
            }
          }, stepTime);

          observer.unobserve(target);
        }
      });
    };

    const counterObserver = new IntersectionObserver(animateCounters, {
      threshold: 0.5,
    });
    statNumbers.forEach((num) => counterObserver.observe(num));

    const modalOverlay = document.getElementById("agencyModal");
    const modalOpenBtns = document.querySelectorAll(".trigger-modal");
    const modalCloseBtn = document.getElementById("modalClose");

    const openModal = (e: Event) => {
      e.preventDefault();
      modalOverlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    modalOpenBtns.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });

    const closeModal = () => {
      modalOverlay?.classList.remove("active");
      document.body.style.overflow = "";
    };

    const onOverlayClick = (e: Event) => {
      if (e.target === modalOverlay) closeModal();
    };

    modalCloseBtn?.addEventListener("click", closeModal);
    modalOverlay?.addEventListener("click", onOverlayClick);

    const viewerPulse = setInterval(() => {
      const viewerPills = document.querySelectorAll(".viewer-count-pill span");
      viewerPills.forEach((span) => {
        if (Math.random() > 0.6) {
          const current = parseFloat(span.textContent || "1.0");
          const diff = (Math.random() * 0.2 - 0.1).toFixed(1);
          const nextVal = Math.max(0.5, current + parseFloat(diff)).toFixed(1);
          span.textContent = `${nextVal}k`;
        }
      });
    }, 3000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      backToTopBtn?.removeEventListener("click", onBackToTop);
      mobileToggle?.removeEventListener("click", toggleMobileNav);
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", onMobileNavLinkClick);
      });
      if (onNext) nextBtn?.removeEventListener("click", onNext);
      if (onPrev) prevBtn?.removeEventListener("click", onPrev);
      if (wrapper && onMouseEnter && onMouseLeave) {
        wrapper.removeEventListener("mouseenter", onMouseEnter);
        wrapper.removeEventListener("mouseleave", onMouseLeave);
      }
      if (slider && onTouchStart && onTouchEnd) {
        slider.removeEventListener("touchstart", onTouchStart);
        slider.removeEventListener("touchend", onTouchEnd);
      }
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      tabListeners.forEach(([btn, handler]) => {
        btn.removeEventListener("click", handler);
      });
      counterObserver.disconnect();
      modalOpenBtns.forEach((btn) => {
        btn.removeEventListener("click", openModal);
      });
      modalCloseBtn?.removeEventListener("click", closeModal);
      modalOverlay?.removeEventListener("click", onOverlayClick);
      clearInterval(viewerPulse);
      document.body.style.overflow = "";
    };
  }, []);
}
