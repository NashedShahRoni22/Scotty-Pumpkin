"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        @keyframes sp-float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes sp-float-slow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes sp-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes sp-glow-pulse {
          0%, 100% { opacity: 0.4; text-shadow: 0 0 40px rgba(245,158,11,0.4), 0 0 80px rgba(245,158,11,0.2); }
          50%       { opacity: 1;   text-shadow: 0 0 60px rgba(245,158,11,0.9), 0 0 120px rgba(245,158,11,0.5), 0 0 200px rgba(245,158,11,0.2); }
        }
        @keyframes sp-glitch {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          5%   { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
          10%  { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
          15%  { clip-path: inset(80% 0 5% 0);  transform: translate(3px, 0); }
          20%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
        }
        @keyframes sp-glitch2 {
          0%   { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); color: #a78bfa; }
          5%   { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 0); color: #4ade80; }
          10%  { clip-path: inset(70% 0 10% 0); transform: translate(2px, 0); color: #f59e0b; }
          15%  { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 0); }
          20%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
        }
        @keyframes sp-star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
        @keyframes sp-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sp-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sp-orbit {
          from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes sp-orbit-rev {
          from { transform: rotate(0deg) translateX(75px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(75px) rotate(360deg); }
        }

        .nf-404 {
          font-size: clamp(7rem, 22vw, 14rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(245,158,11,0.15);
          position: relative;
          user-select: none;
        }
        .nf-404-main {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f59e0b;
          animation: sp-glow-pulse 3s ease-in-out infinite;
        }
        .nf-404-glitch1 {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a78bfa;
          animation: sp-glitch 4s steps(1) infinite;
          pointer-events: none;
        }
        .nf-404-glitch2 {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: sp-glitch2 4s steps(1) 0.3s infinite;
          pointer-events: none;
        }

        .nf-shimmer {
          background: linear-gradient(90deg,
            rgba(255,255,255,0.6) 0%,
            #fff 35%,
            rgba(255,255,255,0.6) 65%,
            #fff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sp-shimmer 5s linear infinite;
        }

        .nf-home-btn {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 4px 24px rgba(21,128,61,0.45);
          transition: all 0.25s ease;
        }
        .nf-home-btn:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          transform: scale(1.05);
          box-shadow: 0 6px 36px rgba(21,128,61,0.65);
        }
        .nf-back-btn {
          border: 2px solid rgba(168,85,247,0.55);
          transition: all 0.25s ease;
        }
        .nf-back-btn:hover {
          background: rgba(168,85,247,0.15);
          border-color: rgba(168,85,247,0.9);
          transform: scale(1.05);
        }

        .nf-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(168,85,247,0.25) 50%, rgba(255,255,255,0.08) 80%, transparent);
        }

        .nf-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        /* Stars */
        .nf-star { position: absolute; border-radius: 50%; background: white; }
      `}</style>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

        {/* ── Background stars ── */}
        {[
          { size: 2, top: "8%",  left: "12%",  delay: "0s",    duration: "2.8s" },
          { size: 1, top: "15%", left: "78%",  delay: "0.5s",  duration: "3.5s" },
          { size: 3, top: "22%", left: "45%",  delay: "1s",    duration: "2.2s" },
          { size: 1, top: "35%", left: "5%",   delay: "1.5s",  duration: "4s"   },
          { size: 2, top: "55%", left: "90%",  delay: "0.3s",  duration: "3.1s" },
          { size: 1, top: "70%", left: "25%",  delay: "0.8s",  duration: "2.6s" },
          { size: 2, top: "80%", left: "65%",  delay: "1.2s",  duration: "3.8s" },
          { size: 1, top: "90%", left: "40%",  delay: "0.6s",  duration: "2.4s" },
          { size: 3, top: "5%",  left: "55%",  delay: "1.8s",  duration: "3.3s" },
          { size: 1, top: "45%", left: "95%",  delay: "0.2s",  duration: "4.2s" },
          { size: 2, top: "62%", left: "3%",   delay: "1.4s",  duration: "2.9s" },
          { size: 1, top: "28%", left: "88%",  delay: "0.9s",  duration: "3.6s" },
        ].map((s, i) => (
          <div
            key={i}
            className="nf-star"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              animation: `sp-star-twinkle ${s.duration} ${s.delay} ease-in-out infinite`,
            }}
          />
        ))}

        {/* ── Ambient glows ── */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }} />

        {/* ── Main content ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">

          {/* Orbiting pumpkin system */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: 240, height: 240, animation: "sp-fade-up 0.6s ease both" }}
          >
            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(245,158,11,0.2)",
                animation: "sp-spin-slow 20s linear infinite",
              }}
            />
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: 150, height: 150,
                top: "50%", left: "50%",
                marginTop: -75, marginLeft: -75,
                border: "1px dashed rgba(168,85,247,0.15)",
                animation: "sp-spin-slow 14s linear infinite reverse",
              }}
            />

            {/* Orbiting ghost */}
            <div className="absolute" style={{ top: "50%", left: "50%", marginTop: -12, marginLeft: -12 }}>
              <div style={{ animation: "sp-orbit 8s linear infinite" }}>
                <span style={{ fontSize: 22 }}>👻</span>
              </div>
            </div>

            {/* Orbiting star */}
            <div className="absolute" style={{ top: "50%", left: "50%", marginTop: -10, marginLeft: -10 }}>
              <div style={{ animation: "sp-orbit-rev 5s linear infinite" }}>
                <span style={{ fontSize: 16 }}>⭐</span>
              </div>
            </div>

            {/* Central pumpkin */}
            <div style={{ fontSize: 90, animation: "sp-float 5s ease-in-out infinite", filter: "drop-shadow(0 0 30px rgba(245,158,11,0.5))" }}>
              🎃
            </div>
          </div>

          {/* 404 glitch number */}
          <div style={{ animation: "sp-fade-up 0.7s ease 0.1s both" }}>
            <div className="nf-404 select-none" style={{ width: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{
                fontSize: "clamp(7rem, 22vw, 14rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "rgba(245,158,11,0.12)",
                WebkitTextStroke: "2px rgba(245,158,11,0.15)",
              }}>404</span>
              <span className="nf-404-main" style={{ fontSize: "clamp(7rem, 22vw, 14rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>404</span>
              <span className="nf-404-glitch1" style={{ fontSize: "clamp(7rem, 22vw, 14rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>404</span>
              <span className="nf-404-glitch2" style={{ fontSize: "clamp(7rem, 22vw, 14rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>404</span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-3" style={{ animation: "sp-fade-up 0.7s ease 0.2s both" }}>
            <h1 className="text-2xl sm:text-3xl font-black nf-shimmer">
              This page got spooked away!
            </h1>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              Looks like Scotty went trick-or-treating on a page that doesn&apos;t exist.
              Let&apos;s get you back to the pumpkin patch.
            </p>
          </div>

          <div className="nf-divider w-full" style={{ animation: "sp-fade-up 0.7s ease 0.3s both" }} />

          {/* Info card */}
          <div className="nf-card rounded-2xl px-6 py-5 w-full" style={{ animation: "sp-fade-up 0.7s ease 0.35s both" }}>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl flex-shrink-0 mt-0.5">🔍</span>
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Why am I here?</p>
                <p className="text-white/45 text-sm leading-relaxed">
                  The page may have been moved, deleted, or the link might be incorrect.
                  Try heading back home or visiting the marketplace.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto" style={{ animation: "sp-fade-up 0.7s ease 0.45s both" }}>
            <Link href="/" className="nf-home-btn px-8 py-3.5 rounded-xl font-bold text-base text-white text-center">
              🏠 Back to Home
            </Link>
            <Link href="/marketplace" className="nf-back-btn px-8 py-3.5 rounded-xl font-semibold text-base text-white text-center">
              🛒 Visit Marketplace
            </Link>
          </div>

          {/* Footer hint */}
          <p className="text-white/25 text-xs pb-4" style={{ animation: "sp-fade-up 0.7s ease 0.55s both" }}>
            Error 404 — Page not found on the Scotty Pumpkin platform
          </p>

        </div>
      </div>
    </>
  );
}