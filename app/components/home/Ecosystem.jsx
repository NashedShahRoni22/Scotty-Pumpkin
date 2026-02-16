import React from 'react';
import { Palette, ShoppingCart, Store, TrendingUp, Coins, Package } from 'lucide-react';

export default function Ecosystem() {
  const cycleSteps = [
    {
      id: 1,
      title: 'Create',
      description: 'Mint NFTs for digital art or physical creations',
      illustration: '🎨',
      gradient: 'from-blue-600 to-blue-800',
      border: 'border-blue-400/30'
    },
    {
      id: 2,
      title: 'Sell',
      description: 'Sell NFTs & physical creations',
      illustration: '👨‍💼',
      gradient: 'from-pink-600 to-pink-800',
      border: 'border-pink-400/30'
    },
    {
      id: 3,
      title: 'Grow',
      description: 'Create your own Web3 online store',
      illustration: '💰',
      gradient: 'from-orange-600 to-orange-800',
      border: 'border-orange-400/30'
    },
    {
      id: 4,
      title: 'Sell',
      description: 'Mint NFTs for digital art or physical creations',
      illustration: '📦',
      gradient: 'from-blue-600 to-cyan-800',
      border: 'border-cyan-400/30'
    }
  ];

  return (
    <section className="relative z-10 px-4 py-16 md:py-24 lg:py-32 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl">🌍</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Our Eco-Cycle
            </h2>
          </div>
        </div>

        {/* Mobile Layout (< 768px) */}
        <div className="block md:hidden space-y-8 max-w-sm mx-auto">
          {/* Top Pumpkin */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex items-center justify-center shadow-xl border-4 border-purple-400/30">
              <div className="text-4xl">🎃</div>
            </div>
          </div>

          {cycleSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Circle */}
                <div className={`w-28 h-28 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-xl border-4 ${step.border} mb-4`}>
                  <div className="text-5xl">{step.illustration}</div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-purple-200 px-4">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < cycleSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
                    <defs>
                      <marker id={`arrow-mobile-${index}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="currentColor" />
                      </marker>
                    </defs>
                    <line x1="20" y1="5" x2="20" y2="30" stroke="currentColor" strokeWidth="2" markerEnd={`url(#arrow-mobile-${index})`} />
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Central Grow Circle */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-green-400/30">
              <div className="text-center">
                <div className="text-5xl mb-1">♻️</div>
                <p className="text-base font-bold">Grow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (>= 768px) */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Central Circle with Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-green-400/30">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-2">♻️</div>
                <p className="text-sm md:text-base lg:text-lg font-bold">Grow</p>
              </div>
            </div>
          </div>

          {/* Circular Path Container */}
          <div className="relative w-full aspect-square max-w-[700px] mx-auto">
            {/* Top Left - Create */}
            <div className="absolute top-0 left-0 md:left-4 lg:left-12 group">
              <div className="relative">
                {/* Circle */}
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl border-4 border-blue-400/30 group-hover:scale-110 transition-transform">
                  <div className="text-4xl md:text-5xl lg:text-6xl">🎨</div>
                </div>
                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Create</h3>
                  <p className="text-xs md:text-sm lg:text-base text-purple-200 max-w-[120px] md:max-w-[140px]">
                    Mint NFTs for digital art or physical creations
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute -right-20 xl:-right-24 top-12 lg:top-16">
                  <svg width="60" height="60" viewBox="0 0 80 80" className="text-orange-400">
                    <defs>
                      <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    <path d="M 10 10 Q 40 10 60 30" stroke="currentColor" strokeWidth="3" fill="none" markerEnd="url(#arrowhead1)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Top Right - Sell */}
            <div className="absolute top-0 right-0 md:right-4 lg:right-12 group">
              <div className="relative">
                {/* Circle */}
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-pink-600 to-pink-800 rounded-full flex items-center justify-center shadow-xl border-4 border-pink-400/30 group-hover:scale-110 transition-transform">
                  <div className="text-4xl md:text-5xl lg:text-6xl">👨‍💼</div>
                </div>
                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Sell</h3>
                  <p className="text-xs md:text-sm lg:text-base text-purple-200 max-w-[120px] md:max-w-[140px]">
                    Sell NFTs & physical creations
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute -bottom-12 lg:-bottom-16 left-12 lg:left-16">
                  <svg width="60" height="60" viewBox="0 0 80 80" className="text-pink-400 rotate-90">
                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    <path d="M 10 10 Q 40 10 60 30" stroke="currentColor" strokeWidth="3" fill="none" markerEnd="url(#arrowhead2)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Right - Grow */}
            <div className="absolute bottom-0 right-0 md:right-4 lg:right-12 group">
              <div className="relative">
                {/* Circle */}
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center shadow-xl border-4 border-orange-400/30 group-hover:scale-110 transition-transform">
                  <div className="text-4xl md:text-5xl lg:text-6xl">💰</div>
                </div>
                {/* Label */}
                <div className="mb-4 text-center">
                  <p className="text-xs md:text-sm lg:text-base text-purple-200 max-w-[120px] md:max-w-[140px] mb-2">
                    Create your own Web3 online store
                  </p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Grow</h3>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute -left-20 xl:-left-24 bottom-12 lg:bottom-16">
                  <svg width="60" height="60" viewBox="0 0 80 80" className="text-yellow-400 rotate-180">
                    <defs>
                      <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    <path d="M 10 10 Q 40 10 60 30" stroke="currentColor" strokeWidth="3" fill="none" markerEnd="url(#arrowhead3)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Left - Sell */}
            <div className="absolute bottom-0 left-0 md:left-4 lg:left-12 group">
              <div className="relative">
                {/* Circle */}
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-600 to-cyan-800 rounded-full flex items-center justify-center shadow-xl border-4 border-cyan-400/30 group-hover:scale-110 transition-transform">
                  <div className="text-4xl md:text-5xl lg:text-6xl">📦</div>
                </div>
                {/* Label */}
                <div className="mb-4 text-center">
                  <p className="text-xs md:text-sm lg:text-base text-purple-200 max-w-[120px] md:max-w-[140px] mb-2">
                    Mint NFTs for digital art or physical creations
                  </p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Sell</h3>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute -top-12 lg:-top-16 right-12 lg:right-16">
                  <svg width="60" height="60" viewBox="0 0 80 80" className="text-blue-400 -rotate-90">
                    <defs>
                      <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    <path d="M 10 10 Q 40 10 60 30" stroke="currentColor" strokeWidth="3" fill="none" markerEnd="url(#arrowhead4)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Top Center - Character */}
            <div className="absolute -top-6 md:-top-8 lg:-top-12 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex items-center justify-center shadow-xl border-4 border-purple-400/30">
                <div className="text-3xl md:text-4xl lg:text-5xl">🎃</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 md:mt-16 lg:mt-24 space-y-3 md:space-y-4 px-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            A self-sustained creator economy.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            No investors. <span className="text-green-400">No middlemen.</span>
          </p>
        </div>
      </div>
    </section>
  );
}