"use client";

import { useState } from "react";
import heroImg from "@/public/assets/hero.png";
import Image from "next/image";
import centralized from "@/public/assets/buy/centralized.png";
import dex from "@/public/assets/buy/dex.png";

const WALLET_ADDRESS = "8HVXp9...9peL6s";
const WALLET_FULL = "8HVXp9ABCDEFGHIJKLMNOPQRSTUVWXYZabcd9peL6s";

export default function page() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(WALLET_FULL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <style>{`
        @keyframes sp-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes sp-glow-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes sp-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .sp-cex-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(245,158,11,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sp-cex-card:hover {
          border-color: rgba(245,158,11,0.55);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 50px rgba(245,158,11,0.15);
        }
        .sp-dex-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168,85,247,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sp-dex-card:hover {
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 50px rgba(168,85,247,0.15);
        }

        .sp-gradient-btn {
          background: linear-gradient(135deg, #15803d, #166534);
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(21,128,61,0.4);
        }
        .sp-gradient-btn:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          transform: scale(1.04);
          box-shadow: 0 6px 30px rgba(21,128,61,0.6);
        }
        .sp-dex-btn {
          background: rgba(168,85,247,0.12);
          border: 1px solid rgba(168,85,247,0.5);
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(168,85,247,0.2);
        }
        .sp-dex-btn:hover {
          background: rgba(168,85,247,0.25);
          border-color: rgba(168,85,247,0.8);
          transform: scale(1.04);
          box-shadow: 0 6px 30px rgba(168,85,247,0.35);
        }
        .sp-outline-btn {
          border: 1.5px solid rgba(168,85,247,0.55);
          transition: all 0.25s ease;
        }
        .sp-outline-btn:hover {
          background: rgba(168,85,247,0.12);
          border-color: rgba(168,85,247,0.85);
          transform: scale(1.04);
        }

        .sp-shimmer-heading {
          background: linear-gradient(90deg,
            rgba(255,255,255,0.7) 0%,
            rgba(255,255,255,1) 30%,
            rgba(255,255,255,0.7) 60%,
            rgba(255,255,255,1) 90%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sp-shimmer 5s linear infinite;
        }
        .sp-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(168,85,247,0.3) 50%, rgba(255,255,255,0.1) 80%, transparent);
        }
        .sp-check {
          color: #4ade80;
          filter: drop-shadow(0 0 4px rgba(74,222,128,0.6));
          flex-shrink: 0;
        }
      `}</style>

      <section className="relative z-10 px-4 py-12 md:py-16 lg:py-24 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {/* ── Hero Banner ── */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center order-1 md:order-1">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72"
                style={{ animation: "sp-float 4s ease-in-out infinite" }}
              >
                <Image
                  src={heroImg}
                  alt="Scotty"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-5 order-2 md:order-2 text-center md:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl">🎃</div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold sp-shimmer-heading">
                Buy Scotty (SPUMP)
              </h1>

              <p className="text-purple-200 text-base md:text-lg leading-relaxed">
                Use Scotty to pay creators and participate in{" "}
                <span className="font-bold text-white">the Scotty Pumpkin</span>{" "}
                marketplace.
              </p>
              <div className="flex flex-col gap-3">
                <button className="sp-gradient-btn px-7 py-3.5 rounded-xl font-bold text-base text-white flex items-center justify-center gap-2">
                  <span>🟡</span> Buy on Official Exchange (CEX)
                </button>
                <button className="sp-outline-btn px-7 py-3.5 rounded-xl font-semibold text-base text-white">
                  View Token Details
                </button>
              </div>
            </div>
          </div>

          {/* ── Token Info ── */}
          <p className="text-white/60 text-sm md:text-base text-center leading-relaxed">
            Scotty (SPUMP) is a utility payment token used inside the{" "}
            <span className="font-bold text-white">Scotty Pumpkin</span>{" "}
            platform.
          </p>

          <div className="sp-divider" />

          {/* ── CEX Card ── */}
          <div className="space-y-5">
            <div className="sp-cex-card rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-2xl">🏛️</span>
                    <h2 className="text-xl md:text-2xl font-bold text-amber-400">
                      Buy on Centralized Exchange{" "}
                      <span className="text-white/55 font-normal text-base">
                        (Recommended)
                      </span>
                    </h2>
                  </div>
                  <p className="text-white/75 text-sm md:text-base">
                    We list Scotty (SPUMP) on{" "}
                    <span className="font-bold text-white">approved</span>{" "}
                    centralized exchanges to ensure:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Better liquidity",
                      "Regulated onboarding (KYC where required)",
                      "Safer user experience",
                      "Simplified buying process",
                    ].map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-2 text-white/80 text-sm md:text-base"
                      >
                        <span className="sp-check">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <button className="sp-gradient-btn px-8 py-3.5 rounded-xl font-bold text-base text-white mt-2">
                    Visit Official Exchange
                  </button>
                </div>

                <div
                  className="hidden sm:flex size-48 items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.07)",
                    border: "1px solid rgba(245,158,11,0.15)",
                  }}
                >
                  <Image
                    src={centralized}
                    alt="centralized exchange"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ── DEX Card ── */}
            <div className="sp-dex-card rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-2xl">🔄</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      DEX Listing{" "}
                      <span className="text-purple-300 font-normal text-base">
                        (Price Reference &amp; Limited Liquidity)
                      </span>
                    </h2>
                  </div>
                  <p className="text-white/75 text-sm md:text-base">
                    Scotty (SPUMP) may also be available on Solana DEX
                    platforms.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Liquidity is intentionally limited",
                      "Used mainly for price discovery",
                      "Not the preferred method for large purchases",
                    ].map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-2 text-white/80 text-sm md:text-base"
                      >
                        <span className="sp-check">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <button className="sp-dex-btn px-8 py-3.5 rounded-xl font-bold text-base text-white mt-2">
                    View DEX Listing
                  </button>
                </div>

                <div
                  className="hidden sm:flex size-48 items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    background: "rgba(168,85,247,0.07)",
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}
                >
                  <Image src={dex} alt="DEX" className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Footer note ── */}
          <div className="sp-divider" />
          <p className="text-center text-white/35 text-sm pb-4">
            <span className="font-bold text-white/50">Scotty</span> (SPUMP) is a
            utility payment token used exclusively within the Scotty Pumpkin
            platform.
          </p>
        </div>
      </section>
    </>
  );
}
