"use client";

import { FormEvent } from "react";
import { useSiteInteractions } from "@/src/hooks/useSiteInteractions";

export default function HomePage() {
  useSiteInteractions();

  const onAgencySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Agency Portal Login Simulated Successfully!");
  };

  return (
    <>
      <header className="header">
        <div className="container navbar">
          <a href="#" className="nav-brand">
            <img src="/images/logo-dummy.svg" alt="Qobo1Live Logo" />
          </a>

          <nav className="nav-links">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#streams" className="nav-link">
              Live Streams
            </a>
            <a href="#promos" className="nav-link">
              PK & Promos
            </a>
            <a href="#agency" className="nav-link">
              Agency Hub
            </a>
            <a href="#download" className="nav-link">
              Download
            </a>
          </nav>

          <div className="nav-actions">
            <a href="#download" className="btn btn-primary">
              <span>Download App</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className="mobile-nav-drawer" id="mobileNavDrawer">
        <div className="mobile-nav-links">
          <a href="#features" className="mobile-nav-link">
            Features
          </a>
          <a href="#streams" className="mobile-nav-link">
            Live Streams
          </a>
          <a href="#promos" className="mobile-nav-link">
            PK & Promos
          </a>
          <a href="#agency" className="mobile-nav-link">
            Agency Hub
          </a>
          <a href="#download" className="mobile-nav-link">
            Download
          </a>
        </div>
        <div className="mobile-nav-actions">
          <a href="#download" className="btn btn-primary" style={{ width: "100%" }}>
            Download App
          </a>
        </div>
      </div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-tag hero-tag">
              <span className="live-pill">
                <span className="dot"></span> LIVE NOW
              </span>
              <span>NEXT-GEN ENTERTAINMENT</span>
            </div>

            <h1 className="hero-title">
              Stream Live. <br />
              <span className="gradient-text">Connect 1-on-1.</span> <br />
              <span className="gradient-text-gold">Earn Real Rewards.</span>
            </h1>

            <p className="hero-description">
              Welcome to <strong>Qobo1Live</strong> — the premier interactive live streaming platform. Join 24/7
              video broadcasts, host 9-seat audio voice party rooms, challenge creators in high-stakes PK battles, and
              build your agency empire.
            </p>

            <div className="hero-cta-group">
              <a href="#download" className="btn btn-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Get Qobo1Live App</span>
              </a>
              <button className="btn btn-secondary trigger-modal">
                <span>Agency Partner Portal</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="hero-cta-group" style={{ marginBottom: 24 }}>
              <a href="#download" className="store-badge-btn">
                <svg viewBox="0 0 24 24" fill="#38BDF8">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 0 1-.61-1.636V3.45c0-.62.223-1.203.609-1.636zm11.6 11.603l2.84 2.84-12.7 7.258 9.86-10.098zm0-2.834L5.35.485l12.7 7.258-2.84 2.837zm1.42 1.417l3.65-2.09c1.02-.58 1.02-1.53 0-2.12l-3.65-2.09-2.6 2.65 2.6 2.65z" />
                </svg>
                <div>
                  <span className="store-text-small">GET IT ON</span>
                  <span className="store-text-bold">Google Play</span>
                </div>
              </a>

              <a href="#download" className="store-badge-btn">
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.64 1.35-.57.66-1.07 1.74-.93 2.76 1.01.08 2.03-.51 2.64-1.26z" />
                </svg>
                <div>
                  <span className="store-text-small">Download on the</span>
                  <span className="store-text-bold">App Store</span>
                </div>
              </a>

              <a href="#download" className="store-badge-btn">
                <svg viewBox="0 0 24 24" fill="#34D399">
                  <path d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-8.8-1.5a.7.7 0 0 0-.7.7v1.6a.7.7 0 0 0 1.4 0v-1.6a.7.7 0 0 0-.7-.7zm4.6 0a.7.7 0 0 0-.7.7v1.6a.7.7 0 0 0 1.4 0v-1.6a.7.7 0 0 0-.7-.7zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
                <div>
                  <span className="store-text-small">DIRECT DOWNLOAD</span>
                  <span className="store-text-bold">Android APK</span>
                </div>
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <h4>5M+</h4>
                <p>Active Downloads</p>
              </div>
              <div className="hero-stat-item">
                <h4>100K+</h4>
                <p>Verified Streamers</p>
              </div>
              <div className="hero-stat-item">
                <h4>24/7</h4>
                <p>Live Entertainment</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-phone-container">
              <img src="/images/hero-phone-stream.svg" alt="Qobo1Live App Stream Mockup" className="hero-phone-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="banners-section" id="promos">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 30 }}>
            <span className="section-tag">🔥 FEATURED CAMPAIGNS</span>
            <h2 className="section-title">Promotions &amp; Live Events</h2>
          </div>

          <div className="banners-carousel-wrapper">
            <div className="banners-slider" id="bannersSlider">
              <div className="banner-slide">
                <img src="/images/banner-1.svg" alt="Mega PK Battle Championship" />
              </div>
              <div className="banner-slide">
                <img src="/images/banner-2.svg" alt="Become an Agency Partner" />
              </div>
              <div className="banner-slide">
                <img src="/images/banner-3.svg" alt="First Recharge Bonus Offer" />
              </div>
              <div className="banner-slide">
                <img src="/images/banner-4.svg" alt="9-Seat Audio Voice Room Party" />
              </div>
            </div>

            <button className="carousel-nav-btn prev" id="carouselPrev" aria-label="Previous Slide">
              ❮
            </button>
            <button className="carousel-nav-btn next" id="carouselNext" aria-label="Next Slide">
              ❯
            </button>

            <div className="carousel-indicators" id="carouselIndicators"></div>
          </div>
        </div>
      </section>

      <section className="features-section section-padding" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">⚡ WHY CHOOSE QOBO1LIVE</span>
            <h2 className="section-title">
              Everything You Need To <span className="gradient-text">Stream &amp; Monetize</span>
            </h2>
            <p className="section-desc">
              Experience cutting-edge features designed for content creators, agencies, and live entertainment
              enthusiasts worldwide.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🎥</div>
              <h3 className="feature-title">24/7 Ultra-HD Live Streaming</h3>
              <p className="feature-desc">
                Low-latency high-definition video broadcasting with intelligent beautify filters, interactive stickers,
                and real-time audience engagement tools.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🎙️</div>
              <h3 className="feature-title">9-Seat Audio Voice Rooms</h3>
              <p className="feature-desc">
                Gather up to 9 guests on mic! Host podcasts, music jam sessions, karaoke party rooms, or voice chat
                lounges with high-fidelity sound effects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">⚔️</div>
              <h3 className="feature-title">Real-Time Host PK Battles</h3>
              <p className="feature-desc">
                Challenge rival hosts to side-by-side livestream battles! Fans send live virtual gifts to push their
                favorite creator to victory on the progress bar.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📞</div>
              <h3 className="feature-title">Private 1-on-1 Video &amp; Calls</h3>
              <p className="feature-desc">
                Build deeper connections with private 1-on-1 audio and video sessions. Flexible pay-per-minute or
                gift-based call booking for verified hosts.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🎁</div>
              <h3 className="feature-title">Animated Luxury 3D Gifts</h3>
              <p className="feature-desc">
                Express support with jaw-dropping animated entrance effects, sports cars, rockets, dragons, and VIP
                avatar frames that light up the stream room.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">💼</div>
              <h3 className="feature-title">Agency Portal &amp; Payouts</h3>
              <p className="feature-desc">
                Dedicated agency management hub with real-time target tracking, host recruitment controls, transparent
                commission structures, and 24-hour payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="explorer-section section-padding" id="streams">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📺 EXPLORE LIVE CHANNELS</span>
            <h2 className="section-title">
              Discover Top <span className="gradient-text-cyan">Creators &amp; Host Rooms</span>
            </h2>
            <p className="section-desc">Tune into popular streams, voice parties, and active PK battles live right now!</p>
          </div>

          <div className="explorer-tabs">
            <button className="tab-btn active" data-filter="all">
              All Rooms
            </button>
            <button className="tab-btn" data-filter="trending">
              🔥 Trending Video
            </button>
            <button className="tab-btn" data-filter="audio">
              🎙️ Voice Party
            </button>
            <button className="tab-btn" data-filter="pk">
              ⚔️ PK Battles
            </button>
            <button className="tab-btn" data-filter="vip">
              👑 VIP Stars
            </button>
          </div>

          <div className="streams-grid">
            <div className="stream-card" data-category="trending">
              <div className="stream-thumbnail">
                <svg viewBox="0 0 400 500" width="100%" height="100%">
                  <rect width="400" height="500" fill="#311042" />
                  <circle cx="200" cy="220" r="110" fill="#8B5CF6" opacity="0.3" />
                  <text x="200" y="240" fontFamily="sans-serif" fontSize="100" textAnchor="middle">
                    💃🎤
                  </text>
                </svg>
                <div className="stream-overlay-tags">
                  <span className="live-pill">
                    <span className="dot"></span> LIVE
                  </span>
                  <span className="viewer-count-pill">
                    👁️ <span>4.8k</span>
                  </span>
                </div>
                <div className="play-hover-btn">▶</div>
              </div>
              <div className="stream-info-bar">
                <div className="streamer-avatar" style={{ background: "#EC4899" }}></div>
                <div className="stream-meta">
                  <h4>Sophia_Vibe ✨</h4>
                  <p>Pop Music &amp; Singing Lounge</p>
                </div>
              </div>
            </div>

            <div className="stream-card" data-category="pk">
              <div className="stream-thumbnail">
                <svg viewBox="0 0 400 500" width="100%" height="100%">
                  <rect width="400" height="500" fill="#1E1B4B" />
                  <circle cx="200" cy="220" r="110" fill="#EF4444" opacity="0.3" />
                  <text x="200" y="240" fontFamily="sans-serif" fontSize="90" textAnchor="middle">
                    ⚔️🥊
                  </text>
                </svg>
                <div className="stream-overlay-tags">
                  <span
                    className="live-pill"
                    style={{ background: "rgba(245,158,11,0.2)", borderColor: "#F59E0B", color: "#FBBF24" }}
                  >
                    <span className="dot" style={{ background: "#F59E0B" }}></span> PK ACTIVE
                  </span>
                  <span className="viewer-count-pill">
                    👁️ <span>8.2k</span>
                  </span>
                </div>
                <div className="play-hover-btn">▶</div>
              </div>
              <div className="stream-info-bar">
                <div className="streamer-avatar" style={{ background: "#F59E0B" }}></div>
                <div className="stream-meta">
                  <h4>Team Alex vs Maya ⚔️</h4>
                  <p>PK Final Showdown ($5,000)</p>
                </div>
              </div>
            </div>

            <div className="stream-card" data-category="audio">
              <div className="stream-thumbnail">
                <svg viewBox="0 0 400 500" width="100%" height="100%">
                  <rect width="400" height="500" fill="#064E3B" />
                  <circle cx="200" cy="220" r="110" fill="#34D399" opacity="0.3" />
                  <text x="200" y="240" fontFamily="sans-serif" fontSize="90" textAnchor="middle">
                    🎧🎙️
                  </text>
                </svg>
                <div className="stream-overlay-tags">
                  <span
                    className="live-pill"
                    style={{ background: "rgba(16,185,129,0.2)", borderColor: "#10B981", color: "#34D399" }}
                  >
                    <span className="dot" style={{ background: "#34D399" }}></span> VOICE 9/9
                  </span>
                  <span className="viewer-count-pill">
                    👁️ <span>2.1k</span>
                  </span>
                </div>
                <div className="play-hover-btn">▶</div>
              </div>
              <div className="stream-info-bar">
                <div className="streamer-avatar" style={{ background: "#10B981" }}></div>
                <div className="stream-meta">
                  <h4>Midnight Chill Podcast 🌙</h4>
                  <p>Late Night Stories &amp; Music</p>
                </div>
              </div>
            </div>

            <div className="stream-card" data-category="vip">
              <div className="stream-thumbnail">
                <svg viewBox="0 0 400 500" width="100%" height="100%">
                  <rect width="400" height="500" fill="#4C1D95" />
                  <circle cx="200" cy="220" r="110" fill="#F472B6" opacity="0.3" />
                  <text x="200" y="240" fontFamily="sans-serif" fontSize="90" textAnchor="middle">
                    👑⭐
                  </text>
                </svg>
                <div className="stream-overlay-tags">
                  <span className="live-pill">
                    <span className="dot"></span> LIVE
                  </span>
                  <span className="viewer-count-pill">
                    👁️ <span>12.5k</span>
                  </span>
                </div>
                <div className="play-hover-btn">▶</div>
              </div>
              <div className="stream-info-bar">
                <div className="streamer-avatar" style={{ background: "#A855F7" }}></div>
                <div className="stream-meta">
                  <h4>King_David_VIP 👑</h4>
                  <p>Luxury Gift Rain Showdown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agency-section section-padding" id="agency">
        <div className="container">
          <div className="agency-box">
            <div className="agency-grid">
              <div>
                <span
                  className="section-tag"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    borderColor: "rgba(245,158,11,0.4)",
                    color: "#FBBF24",
                  }}
                >
                  👑 AGENCY PARTNER NETWORK
                </span>
                <h2 className="section-title" style={{ marginBottom: 20 }}>
                  Build &amp; Grow Your <br />
                  <span className="gradient-text-gold">Streaming Agency Empire</span>
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
                  Qobo1Live offers agency managers the most lucrative revenue-sharing models, dedicated support
                  managers, and automated payout systems in the industry.
                </p>

                <div className="agency-steps">
                  <div className="agency-step-item">
                    <div className="step-num">1</div>
                    <div className="step-content">
                      <h4>Register Your Agency</h4>
                      <p>Apply online in under 2 minutes with valid identity &amp; business credentials.</p>
                    </div>
                  </div>

                  <div className="agency-step-item">
                    <div className="step-num">2</div>
                    <div className="step-content">
                      <h4>Recruit &amp; Onboard Streamers</h4>
                      <p>Add talent, assign monthly targets, and track performance on your agency dashboard.</p>
                    </div>
                  </div>

                  <div className="agency-step-item">
                    <div className="step-num">3</div>
                    <div className="step-content">
                      <h4>Earn High Revenue Commissions</h4>
                      <p>Get up to 70% commission bonus payouts on total gift earnings with 24-hour settlements.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 36 }}>
                  <button className="btn btn-gold trigger-modal">Apply for Agency Account →</button>
                </div>
              </div>

              <div>
                <div className="earnings-card-preview">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 24,
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>Sample Monthly Revenue</span>
                      <h3 style={{ fontSize: "2.2rem", color: "#FBBF24", fontWeight: 900 }}>$64,800.00</h3>
                    </div>
                    <span
                      style={{
                        padding: "6px 14px",
                        background: "rgba(16,185,129,0.2)",
                        border: "1px solid #10B981",
                        color: "#34D399",
                        fontWeight: 700,
                        borderRadius: 20,
                        fontSize: "0.8rem",
                      }}
                    >
                      +34% this month
                    </span>
                  </div>

                  <div className="earnings-metric-row">
                    <span style={{ color: "#94A3B8" }}>Active Agency Streamers</span>
                    <strong style={{ color: "#FFFFFF", fontSize: "1.1rem" }}>185 Streamers</strong>
                  </div>
                  <div className="earnings-metric-row">
                    <span style={{ color: "#94A3B8" }}>Total Gift Coins Collected</span>
                    <strong style={{ color: "#FBBF24", fontSize: "1.1rem" }}>64,800,000 Coins 💎</strong>
                  </div>
                  <div className="earnings-metric-row">
                    <span style={{ color: "#94A3B8" }}>Agency Bonus Tier</span>
                    <strong style={{ color: "#38BDF8", fontSize: "1.1rem" }}>Platinum VIP Agency</strong>
                  </div>
                  <div className="earnings-metric-row">
                    <span style={{ color: "#94A3B8" }}>Payout Settlement</span>
                    <strong style={{ color: "#34D399", fontSize: "1.1rem" }}>Instant Bank / USDT ⚡</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section section-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number" data-count="5000000" data-suffix="+">
                0
              </div>
              <div className="stat-label">Global Downloads</div>
            </div>

            <div className="stat-box">
              <div className="stat-number" data-count="100000" data-suffix="+">
                0
              </div>
              <div className="stat-label">Active Streamers</div>
            </div>

            <div className="stat-box">
              <div className="stat-number" data-count="50000000" data-suffix="+">
                0
              </div>
              <div className="stat-label">Virtual Gifts Sent Daily</div>
            </div>

            <div className="stat-box">
              <div className="stat-number" data-count="120" data-suffix="+">
                0
              </div>
              <div className="stat-label">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💬 COMMUNITY LOVE</span>
            <h2 className="section-title">What Streamers &amp; Agencies Say</h2>
            <p className="section-desc">
              Join thousands of successful creators who transformed their passion into a thriving career on Qobo1Live.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div>
                <div className="stars-row">★★★★★</div>
                <p className="testimonial-text">
                  &quot;Qobo1Live changed my life! The 9-seat audio voice party rooms and PK battle events allowed me to
                  grow a loyal fanbase of over 200,000 followers in less than six months.&quot;
                </p>
              </div>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: "#EC4899" }}></div>
                <div className="user-meta">
                  <h4>Elena Rostova</h4>
                  <p>Top Singer Host • Verified</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="stars-row">★★★★★</div>
                <p className="testimonial-text">
                  &quot;As an agency owner with over 150 hosts, Qobo1Live provides the most transparent dashboard and
                  fastest payout settlements. The support team is available 24/7.&quot;
                </p>
              </div>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: "#38BDF8" }}></div>
                <div className="user-meta">
                  <h4>Marcus Vance</h4>
                  <p>CEO, Apex Media Agency</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="stars-row">★★★★★</div>
                <p className="testimonial-text">
                  &quot;The animated luxury 3D gifts and VIP entry badges are super addictive. I love supporting my
                  favorite PK hosts and making friends from all around the world!&quot;
                </p>
              </div>
              <div className="user-profile">
                <div className="user-avatar" style={{ background: "#F59E0B" }}></div>
                <div className="user-meta">
                  <h4>David K.</h4>
                  <p>VIP Level 7 Supporter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section section-padding" id="download">
        <div className="container">
          <div className="download-banner">
            <div>
              <span
                className="section-tag"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                }}
              >
                📱 READY TO START?
              </span>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Download Qobo1Live App Now!
              </h2>
              <p style={{ color: "var(--text-sub)", fontSize: "1.1rem", marginBottom: 30 }}>
                Available on iOS, Android, and Direct APK download. Scan the QR code or click below to start streaming
                immediately!
              </p>

              <div className="hero-cta-group">
                <a href="#" className="btn btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <span>Download for Android / iOS</span>
                </a>
              </div>
            </div>

            <div className="qr-box">
              <img src="/images/qr-code.svg" alt="Scan QR Code to Download Qobo1Live" className="qr-img" />
              <div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: 6 }}>Scan to Install</h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  Use your phone camera to scan this QR code &amp; download the latest version instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-brand">
                <img src="/images/logo-dummy.svg" alt="Qobo1Live Logo" />
              </a>
              <p>
                Qobo1Live is a global live video streaming, voice party room, and creator monetization platform
                connecting millions worldwide.
              </p>
              <div className="social-links">
                <a href="#" className="social-btn" aria-label="Instagram">
                  📸
                </a>
                <a href="#" className="social-btn" aria-label="Telegram">
                  ✈️
                </a>
                <a href="#" className="social-btn" aria-label="YouTube">
                  ▶️
                </a>
                <a href="#" className="social-btn" aria-label="Discord">
                  💬
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Platform</h4>
              <div className="footer-links-list">
                <a href="#features">Features</a>
                <a href="#streams">Live Rooms</a>
                <a href="#promos">PK Battles</a>
                <a href="#agency">Agency Hub</a>
                <a href="#download">Download App</a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Creators</h4>
              <div className="footer-links-list">
                <a href="#" className="trigger-modal">
                  Agency Partner Login
                </a>
                <a href="#" className="trigger-modal">
                  Host Registration
                </a>
                <a href="#">Creator Guidelines</a>
                <a href="#">Coin &amp; Earnings Calculator</a>
                <a href="#">VIP Privileges</a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Legal &amp; Support</h4>
              <div className="footer-links-list">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Agency Agreement</a>
                <a href="#">Safety &amp; Community Rules</a>
                <a href="#">Help Center / 24/7 Support</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Qobo1Live Inc. All rights reserved.</p>
            <p>Designed for High Performance &amp; Global Scalability</p>
          </div>
        </div>
      </footer>

      <div className="modal-overlay" id="agencyModal">
        <div className="modal-card">
          <button className="modal-close-btn" id="modalClose" aria-label="Close modal">
            ✕
          </button>

          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img
              src="/images/logo-dummy.svg"
              alt="Qobo1Live Logo"
              style={{ height: 40, margin: "0 auto 12px auto" }}
            />
            <h3 style={{ fontSize: "1.5rem" }}>Agency Partner Portal</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Sign in to your agency management dashboard
            </p>
          </div>

          <form onSubmit={onAgencySubmit}>
            <div className="form-group">
              <label htmlFor="agencyEmail">Agency Email / Account ID</label>
              <input
                type="email"
                id="agencyEmail"
                className="form-control"
                placeholder="agency@qobo1live.in"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="agencyPassword">Password</label>
              <input
                type="password"
                id="agencyPassword"
                className="form-control"
                placeholder="••••••••••••"
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
                fontSize: "0.85rem",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={{ color: "var(--primary)" }}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", borderRadius: "var(--radius-md)" }}>
              Sign In To Dashboard →
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20, fontSize: "0.88rem", color: "var(--text-muted)" }}>
            Don&apos;t have an agency account yet?{" "}
            <a href="#" style={{ color: "var(--secondary)", fontWeight: 700 }}>
              Apply Here
            </a>
          </div>
        </div>
      </div>

      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        ↑
      </button>
    </>
  );
}
