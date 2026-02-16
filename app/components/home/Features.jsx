import { Sparkles, Store, ShoppingBag, ShoppingCart, Coins } from 'lucide-react';

export default function Features() {
  const features = [
    { 
      icon: Sparkles, 
      text: 'Create or sell fashion, accessories, jewelry, art, NFTs and goods.' 
    },
    { 
      icon: Store, 
      text: 'Build your own Web3 online store and sell digital content' 
    },
    { 
      icon: ShoppingBag, 
      text: 'Create your own Web3 online store' 
    },
    { 
      icon: ShoppingCart, 
      text: 'Sell goods and digital content in one place' 
    },
    { 
      icon: Coins, 
      text: 'Pay or get paid using Scotty (SPUMP) - your friendly Web3 payment' 
    }
  ];

  return (
    <section className="relative z-10 px-4 py-12 md:py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-12 leading-tight">
          Create • Sell • Brand • Get Paid
        </h2>

        {/* Features List */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 max-w-4xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-3 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl group hover:translate-x-2 transition-transform"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 text-green-500 rounded flex items-center justify-center mt-1 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-xl md:text-2xl font-bold">✓</span>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-12 md:mb-16 px-4">
          No investors. No middlemen.{' '}
          <span className="text-green-400">Just creators and buyers.</span>
        </p>
      </div>
    </section>
  );
}