import Link from "next/link";

export default function ChildSafetyStandards() {
  return (
    <>
      <header className="header" style={{ position: "relative", borderBottom: "1px solid var(--border-glass)" }}>
        <div className="container navbar">
          <Link href="/" className="nav-brand">
            <img src="/images/logo-dummy.svg" alt="Qobo1Live Logo" />
          </Link>

          <div className="nav-actions">
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "var(--radius-full)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main
        style={{
          minHeight: "80vh",
          padding: "60px 0 100px 0",
          background: "radial-gradient(circle at 50% 10%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
        }}
      >
        <div className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <span
              className="section-tag"
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                background: "rgba(236, 72, 153, 0.12)",
                border: "1px solid rgba(236, 72, 153, 0.35)",
                color: "#F472B6",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}
            >
              🛡️ SAFETY &amp; COMPLIANCE
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: 16,
                background: "linear-gradient(135deg, #FFFFFF 0%, #E9D5FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Child Safety Standards
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Published in accordance with Google Play Policy and Global Child Protection Frameworks
            </p>
          </div>

          <div
            style={{
              background: "rgba(18, 24, 38, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(24px, 5vw, 48px)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
              color: "#E2E8F0",
              lineHeight: 1.75,
              fontSize: "1.02rem",
            }}
          >
            {/* Zero Tolerance Callout */}
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(239, 68, 68, 0.1)",
                borderLeft: "4px solid #EF4444",
                borderRadius: "var(--radius-sm)",
                marginBottom: 36,
              }}
            >
              <h2 style={{ fontSize: "1.15rem", color: "#FCA5A5", marginBottom: 8, fontWeight: 700 }}>
                Zero Tolerance Commitment
              </h2>
              <p style={{ margin: 0, color: "#FEE2E2", fontSize: "0.98rem" }}>
                <strong>Qobo1live</strong> is operated by <strong>Qobo1Live Inc.</strong> We have{" "}
                <strong>zero tolerance</strong> for child sexual abuse and exploitation (CSAE), including child sexual
                abuse material (CSAM), grooming, sextortion, and any sexualisation of minors.
              </p>
            </div>

            {/* Section 1 */}
            <section style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#C084FC",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  1
                </span>
                Age Requirement
              </h3>
              <p style={{ color: "var(--text-sub)", marginLeft: 38 }}>
                Qobo1live is only for users aged <strong>18 and above</strong>. Accounts found to belong to anyone under
                18 are removed immediately and permanently.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#C084FC",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  2
                </span>
                Prohibited Content &amp; Behaviour
              </h3>
              <p style={{ color: "var(--text-sub)", marginLeft: 38, marginBottom: 12 }}>
                Users must not create, share, request or promote any content or conduct that sexually exploits or
                endangers children.
              </p>
              <p style={{ color: "var(--text-sub)", marginLeft: 38 }}>
                This absolute prohibition applies across <strong>all</strong> features of the Qobo1live platform
                without exception, including:
              </p>
              <ul style={{ marginLeft: 62, marginTop: 8, color: "var(--text-sub)" }}>
                <li style={{ marginBottom: 6 }}>Live video streams and co-host broadcasts</li>
                <li style={{ marginBottom: 6 }}>Voice and video party rooms (including 9-seat audio panels)</li>
                <li style={{ marginBottom: 6 }}>Private 1:1 audio and video calls</li>
                <li style={{ marginBottom: 6 }}>Chat messages, direct messages, comments, and room chats</li>
                <li style={{ marginBottom: 6 }}>Profile photos, avatars, bios, and nicknames</li>
                <li>All other interactive and user-generated features</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#C084FC",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  3
                </span>
                How to Report
              </h3>
              <p style={{ color: "var(--text-sub)", marginLeft: 38, marginBottom: 12 }}>
                Anyone who encounters suspicious activity or potential child safety violations can report it
                immediately:
              </p>
              <div
                style={{
                  marginLeft: 38,
                  display: "grid",
                  gap: 12,
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <strong style={{ color: "#fff", display: "block", marginBottom: 6 }}>📲 In the App:</strong>
                  <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                    Use the <strong>Report</strong> option available on any profile, live stream, room, or chat to
                    alert our moderation team.
                  </span>
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <strong style={{ color: "#fff", display: "block", marginBottom: 6 }}>✉️ By Email:</strong>
                  <span style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                    Send an urgent report directly to{" "}
                    <a href="mailto:safety@qobo1live.in" style={{ color: "#A78BFA", textDecoration: "underline" }}>
                      safety@qobo1live.in
                    </a>
                  </span>
                </div>
              </div>
              <p style={{ color: "#FCD34D", fontSize: "0.92rem", marginLeft: 38, marginTop: 14, fontWeight: 600 }}>
                ⚡ Reports involving child safety are prioritised for review.
              </p>
            </section>

            {/* Section 4 */}
            <section style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#C084FC",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  4
                </span>
                What We Do
              </h3>
              <ul style={{ marginLeft: 62, color: "var(--text-sub)" }}>
                <li style={{ marginBottom: 8 }}>
                  <strong>Remove Violations &amp; Ban Accounts:</strong> Remove violating content immediately and
                  permanently ban the accounts and associated identifiers involved.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Preserve Evidence &amp; Report to Authorities:</strong> Preserve relevant evidence and report
                  confirmed CSAM to the <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> and/or
                  relevant Indian authorities (e.g. via{" "}
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#38BDF8" }}>
                    cybercrime.gov.in
                  </a>
                  ), as required by law.
                </li>
                <li>
                  <strong>Law Enforcement Cooperation:</strong> Cooperate fully with law enforcement requests and
                  investigations.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section style={{ marginBottom: 28 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.2)",
                    color: "#C084FC",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  5
                </span>
                Child Safety Contact
              </h3>
              <p style={{ color: "var(--text-sub)", marginLeft: 38, marginBottom: 14 }}>
                Our designated point of contact for CSAM prevention and compliance:
              </p>
              <div
                style={{
                  marginLeft: 38,
                  padding: "18px 22px",
                  background: "rgba(139, 92, 246, 0.08)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <strong style={{ color: "#FFFFFF" }}>Designated Role:</strong>{" "}
                  <span style={{ color: "#E2E8F0" }}>Child Safety &amp; CSAM Compliance Officer</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <strong style={{ color: "#FFFFFF" }}>Safety Email:</strong>{" "}
                  <a href="mailto:safety@qobo1live.in" style={{ color: "#A78BFA", fontWeight: 600 }}>
                    safety@qobo1live.in
                  </a>
                </div>
                <div>
                  <strong style={{ color: "#FFFFFF" }}>Google Play Developer Contact:</strong>{" "}
                  <a href="mailto:nirkumtechnical@gmail.com" style={{ color: "#A78BFA", fontWeight: 600 }}>
                    nirkumtechnical@gmail.com
                  </a>
                </div>
              </div>
            </section>

            {/* Footer timestamp */}
            <div
              style={{
                marginTop: 36,
                paddingTop: 20,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <span>Last updated: September 27, 2026</span>
              <span>Operated by Qobo1Live Inc.</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ borderTop: "1px solid var(--border-glass)", padding: "40px 0 20px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 8 }}>
            © 2026 Qobo1Live Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, fontSize: "0.85rem" }}>
            <Link href="/" style={{ color: "#A78BFA", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/child-safety" style={{ color: "#A78BFA", textDecoration: "none" }}>
              Child Safety Standards
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
