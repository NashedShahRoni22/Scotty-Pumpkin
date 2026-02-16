import { Palette, Tag, ShoppingBag, Coins, Store } from 'lucide-react';

export default function WorkflowCards() {
  const cards = [
    {
      title: 'Create',
      gradient: 'from-purple-900/80 to-indigo-900/80',
      border: 'border-purple-500/30 hover:border-purple-400/50',
      icons: [
        { Icon: Palette, color: 'text-yellow-400', size: 'w-12 h-12 md:w-16 md:h-16', position: 'relative' },
        { Icon: Coins, color: 'text-yellow-500', size: 'w-8 h-8 md:w-12 md:h-12', position: 'absolute top-2 right-4 md:top-4 md:right-8' },
        { Icon: ShoppingBag, color: 'text-blue-400', size: 'w-7 h-7 md:w-10 md:h-10', position: 'absolute bottom-2 left-4 md:bottom-4 md:left-8' }
      ],
      description: [
        'Create NFTs, digital art, or physical creations',
        'Fashion, jewelry, accessories, art & more'
      ],
      highlight: 1
    },
    {
      title: 'Brand',
      gradient: 'from-purple-900/80 to-pink-900/80',
      border: 'border-pink-500/30 hover:border-pink-400/50',
      icons: [
        { Icon: Tag, color: 'text-pink-400', size: 'w-12 h-12 md:w-16 md:h-16', position: 'relative' },
        { Icon: Store, color: 'text-blue-400', size: 'w-8 h-8 md:w-12 md:h-12', position: 'absolute top-2 right-4 md:top-4 md:right-8' }
      ],
      description: [
        'Brand your artist name or fashion label',
        'Create collections & limited editions'
      ],
      highlight: 1
    },
    {
      title: 'Your Web3 Store',
      gradient: 'from-indigo-900/80 to-purple-900/80',
      border: 'border-indigo-500/30 hover:border-indigo-400/50',
      icons: [
        { Icon: ShoppingBag, color: 'text-purple-400', size: 'w-12 h-12 md:w-16 md:h-16', position: 'relative' },
        { Icon: Coins, color: 'text-yellow-500', size: 'w-8 h-8 md:w-12 md:h-12', position: 'absolute top-2 right-4 md:top-4 md:right-8' }
      ],
      description: [
        'Your own Web3 Web3 shop',
        'Sell goods, fashion items and content'
      ],
      highlight: 0,
      badge: 'NFT'
    },
    {
      title: 'Get Paid',
      subtitle: 'with Scotty ⭐',
      gradient: 'from-purple-900/80 to-indigo-900/80',
      border: 'border-purple-500/30 hover:border-purple-400/50',
      icons: [
        { Icon: Coins, color: 'text-yellow-500', size: 'w-16 h-16 md:w-20 md:h-20', position: 'relative' }
      ],
      description: [
        'Use Scotty (SPUMP) to:',
        '✓ Accept payments',
        '✓ Pay creators',
        '✓ Buy & sell on the marketplace'
      ],
      badge: 'NFT',
      isList: true
    }
  ];

  return (
    <section className="relative z-10 px-4 py-12 md:py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 ${card.border} transition-all hover:transform hover:scale-105 shadow-xl hover:shadow-2xl`}
            >
              {/* Icon Section */}
              <div className="mb-4 md:mb-6">
                <div className="relative w-full h-32 md:h-40 flex items-center justify-center">
                  {card.icons.map((icon, iconIndex) => {
                    const Icon = icon.Icon;
                    return (
                      <Icon
                        key={iconIndex}
                        className={`${icon.size} ${icon.color} ${icon.position} drop-shadow-lg`}
                      />
                    );
                  })}
                  {card.badge && (
                    <div className="absolute bottom-2 right-2 md:bottom-4 md:right-8 bg-blue-500 rounded px-2 py-1 text-xs md:text-sm font-bold shadow-lg">
                      {card.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {card.title}
                {card.subtitle && (
                  <>
                    <br />
                    <span className="text-lg md:text-xl">{card.subtitle}</span>
                  </>
                )}
              </h3>

              {/* Description */}
              <div className="space-y-1 md:space-y-2 text-purple-200 text-sm md:text-base">
                {card.description.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className={card.highlight === lineIndex ? 'font-semibold text-white' : ''}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}