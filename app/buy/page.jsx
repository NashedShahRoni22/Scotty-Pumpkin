"use client";

import { useState } from "react";
import heroImg from "@/public/assets/hero.png";
import Image from "next/image";
import Step1 from "@/public/assets/buy/Step-1.png";
import Step2 from "@/public/assets/buy/Step-2.png";
import Step3 from "@/public/assets/buy/Step-3.png";
import centralized from "@/public/assets/buy/centralized.png";
import dex from "@/public/assets/buy/dex.png";

const WALLET_ADDRESS = "8HVXp9...9peL6s";
const WALLET_FULL = "8HVXp9ABCDEFGHIJKLMNOPQRSTUVWXYZabcd9peL6s";

const STEPS = [
  {
    number: 1,
    title: "Step 1 — Get a Solana wallet",
    image: Step1,
    imageAlt: "Solana wallet",
    points: [
      "You need a Solana-compatible wallet: Phantom",
      "Solflare; Backpack",
    ],
    note: "This wallet is your personal wallet.",
  },
  {
    number: 2,
    title: "Step 2 — Buy a small amount of SOL",
    image: Step2,
    imageAlt: "Buy SOL",
    points: ["SOL is required only to pay Solana network fees."],
    note: null,
  },
  {
    number: 3,
    title: "Step 3 — Get Scotty (SPUMP)",
    image: Step3,
    imageAlt: "Get SPUMP",
    points: [
      <span key="p1">Swap SOL → <span className="font-bold text-white">SPUMP</span> on your favorite DEX</span>,
      "Receive SPUMP from another user",
      <span key="p3">Get paid as a creator on <span className="font-bold text-white">Scotty Pumpkin</span></span>,
    ],
    note: null,
  },
];

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

        .sp-step-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sp-step-card:hover {
          transform: translateX(6px);
          border-color: rgba(245,158,11,0.4);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(245,158,11,0.15);
        }
        .sp-wallet-card {
          background: rgba(99,102,241,0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(99,102,241,0.25);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 60px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.07);
        }

        /* ── CEX & DEX cards ── */
        .sp-cex-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(245,158,11,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(245,158,11,0.06), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sp-cex-card:hover {
          border-color: rgba(245,158,11,0.4);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 50px rgba(245,158,11,0.12);
        }
        .sp-dex-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168,85,247,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(168,85,247,0.06), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sp-dex-card:hover {
          border-color: rgba(168,85,247,0.4);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 50px rgba(168,85,247,0.12);
        }

        /* ── Buttons ── */
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
          background: rgba(168,85,247,0.15);
          border: 1px solid rgba(168,85,247,0.4);
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(168,85,247,0.2);
        }
        .sp-dex-btn:hover {
          background: rgba(168,85,247,0.28);
          border-color: rgba(168,85,247,0.7);
          transform: scale(1.04);
          box-shadow: 0 6px 30px rgba(168,85,247,0.35);
        }
        .sp-outline-btn {
          border: 2px solid rgba(168,85,247,0.6);
          transition: all 0.25s ease;
        }
        .sp-outline-btn:hover {
          background: rgba(168,85,247,0.15);
          border-color: rgba(168,85,247,0.9);
          transform: scale(1.04);
        }
        .sp-copy-btn {
          background: rgba(99,102,241,0.2);
          border: 1px solid rgba(99,102,241,0.4);
          transition: all 0.25s ease;
        }
        .sp-copy-btn:hover {
          background: rgba(99,102,241,0.35);
          border-color: rgba(99,102,241,0.7);
        }

        /* ── Misc ── */
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
        .sp-step-number {
          background: linear-gradient(135deg, rgba(245,158,11,0.25), rgba(217,119,6,0.15));
          border: 1px solid rgba(245,158,11,0.4);
          box-shadow: 0 0 20px rgba(245,158,11,0.2);
          animation: sp-glow-pulse 3s ease-in-out infinite;
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
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
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
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-2xl md:text-3xl">🎃</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold sp-shimmer-heading">
                  Buy Scotty (SPUMP)
                </h1>
              </div>
              <p className="text-purple-200 text-base md:text-lg leading-relaxed">
                Use Scotty to pay creators, buy goods, and sell on{" "}
                <span className="font-bold text-white">Scotty Pumpkin</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="sp-gradient-btn px-7 py-3 rounded-lg font-bold text-base text-white">
                  Get Scotty
                </button>
                <button className="sp-outline-btn px-7 py-3 rounded-lg font-semibold text-base text-white">
                  Use Scotty on Marketplace
                </button>
              </div>
            </div>
          </div>

          {/* ── What is Scotty ── */}
          <div className="space-y-4 px-1">
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Scotty (SPUMP) is a utility payment{" "}
              <span className="font-bold text-white">token</span> used inside
              the{" "}
              <span className="font-bold text-white">Scotty Pumpkin</span>{" "}
              marketplace to buy and sell:
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {["Fashion & accessories", "Jewelry, art & goods", "NFTs & digital content"].map((item) => (
                <p key={item} className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                  <span className="sp-check">✓</span>
                  {item}
                </p>
              ))}
            </div>
            <p className="text-white/45 text-sm">
              Scotty (SPUMP) is not an investment product and provides no
              ownership or profit rights.
            </p>
          </div>

          <div className="sp-divider" />

          {/* ── How to get Scotty ── */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              How to get Scotty (SPUMP)
            </h2>

            <div className="grid lg:grid-cols-5 gap-5">

              {/* Steps */}
              <div className="lg:col-span-3 space-y-4">
                {STEPS.map((step) => (
                  <div key={step.number} className="sp-step-card rounded-2xl p-6 md:p-7">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 self-start mt-1">
                        <div className="sp-step-number w-12 h-12 rounded-xl flex items-center justify-center">
                          <span className="text-amber-400 font-black text-lg">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-amber-400 text-lg mb-3">
                          {step.title}
                        </h3>
                        <div className="space-y-1.5 text-sm md:text-base text-white/75">
                          {step.points.map((point, i) => (
                            <p key={i} className="flex items-center gap-2">
                              <span className="sp-check">✓</span>
                              {point}
                            </p>
                          ))}
                        </div>
                        {step.note && (
                          <p className="text-white/40 text-xs mt-3 italic">
                            {step.note}
                          </p>
                        )}
                      </div>
                      <div className="hidden sm:block flex-shrink-0 size-48 relative">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wallet card */}
              <div className="lg:col-span-2">
                <div className="sp-wallet-card rounded-2xl p-6 md:p-7 h-full flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-white text-lg leading-snug text-center">
                      Official Scotty Pumpkin
                      <br />
                      Platform Wallet
                    </h3>
                    <div className="sp-divider" />
                    <div className="space-y-2">
                      <p className="text-white/55 text-sm">
                        Public Solana Wallet Address:
                      </p>
                      <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3">
                        <span className="text-indigo-300 font-mono text-sm font-bold truncate flex-1">
                          {WALLET_ADDRESS}
                        </span>
                        <button
                          onClick={handleCopy}
                          className="sp-copy-btn px-2 py-1 rounded-lg text-xs text-white/70 flex-shrink-0 font-medium"
                        >
                          {copied ? "✓" : "⎘"}
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                      <p className="text-white/50 text-xs mb-1">Purpose:</p>
                      <p className="text-white/80 text-sm font-medium">
                        Platform Fees & Ecosystem Management
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="sp-copy-btn w-full py-3.5 rounded-xl font-bold text-base text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {copied ? "✓ Copied!" : "Copy Wallet Address"}
                  </button>
                </div>
              </div>

            </div>
          </div>

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
                      <span className="text-white/55 font-normal text-base">(Recommended)</span>
                    </h2>
                  </div>
                  <p className="text-white/75 text-sm md:text-base">
                    We list Scotty (SPUMP) on <span className="font-bold text-white">approved</span> centralized
                    exchanges to ensure:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Better liquidity",
                      "Regulated onboarding (KYC where required)",
                      "Safer user experience",
                      "Simplified buying process",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                        <span className="sp-check">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <button className="sp-gradient-btn px-8 py-3.5 rounded-xl font-bold text-base text-white mt-2">
                    Visit Official Exchange
                  </button>
                </div>
                
                {/* Swap this div with your actual CEX image */}
                <div
                  className="hidden sm:flex size-48 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.15)" }}
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
                      <span className="text-purple-300 font-normal text-base">(Price Reference & Limited Liquidity)</span>
                    </h2>
                  </div>
                  <p className="text-white/75 text-sm md:text-base">
                    Scotty (SPUMP) may also be available on Solana DEX platforms.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Liquidity is intentionally limited",
                      "Used mainly for price discovery",
                      "Not the preferred method for large purchases",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                        <span className="sp-check">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <button className="sp-dex-btn px-8 py-3.5 rounded-xl font-bold text-base text-white mt-2">
                    View DEX Listing
                  </button>
                </div>
                {/* Swap this div with your actual DEX image */}
                <div
                  className="hidden sm:flex size-48 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(168,85,247,0.07)", border: "1px solid rgba(168,85,247,0.15)" }}
                >
                  <Image
                    src={dex}
                    alt="DEX"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Footer note ── */}
          <div className="sp-divider" />
          <p className="text-center text-white/35 text-sm pb-4">
            Scotty (SPUMP) is a utility payment token used exclusively within
            the Scotty Pumpkin platform.
          </p>

        </div>
      </section>
    </>
  );
}