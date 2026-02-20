import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowDown, MapPin, Instagram, Coffee, Zap, Star, Clock, Cookie, Droplet } from 'lucide-react';

/* Protein Dreams - High End Landing Page 
  Aesthetic: Modern Editorial, Dark Mode, Grainy Texture, Neon Accents
*/

// --- DATA SOURCE ---
const MENU_ITEMS = [
  // --- SHAKES ---
  {
    id: 'shake-1',
    category: 'shakes',
    title: 'Choco Mint',
    protein: '24g Protein',
    price: '$13.50',
    desc: 'Rich chocolate blended with refreshing mint. A classic favorite.',
    image: 'shake1.jpg', // Minty/Dark
    accent: '#00C4CC'
  },
  {
    id: 'shake-2',
    category: 'shakes',
    title: 'Oreo Dream',
    protein: '24g Protein',
    price: '$14.00',
    desc: 'Cookies and cream goodness without the guilt. Crunchy & smooth.',
    image: 'shake2.jpg', // Minty/Dark
    accent: '#00C4CC'
  },
  {
    id: 'shake-3',
    category: 'shakes',
    title: "S'mores",
    protein: '24g Protein',
    price: '$13.00',
    desc: 'Toasted marshmallow flavor with chocolate notes. Campfire vibes.',
    image: 'shake1.jpg', // Minty/Dark
    accent: '#00C4CC'
  },
  {
    id: 'shake-4',
    category: 'shakes',
    title: 'Pistachio',
    protein: '24g Protein',
    price: '$15.00',
    desc: 'Nutty, creamy, and sophisticated. A unique protein experience.',
    image: 'shake1.jpg', // Minty/Dark
    accent: '#00C4CC'
  },
  {
    id: 'shake-5',
    category: 'shakes',
    title: 'Strawberry Cheesecake',
    protein: '24g Protein',
    price: '$14.50',
    desc: 'Fruity sweetness with a creamy finish. Tastes like dessert.',
    image: 'shake2.jpg', // Minty/Dark
    accent: '#00C4CC'
  },
  {
    id: 'shake-6',
    category: 'shakes',
    title: 'Chunky Monkey',
    protein: '24g Protein',
    price: '$14.00',
    desc: 'Banana, peanut butter, and chocolate. The ultimate power trio.',
    image: 'shake1.jpg', // Minty/Dark
    accent: '#00C4CC'
  },

  // --- TEAS ---
  {
    id: 'tea-1',
    category: 'teas',
    title: 'Mega Tea: American Dream',
    protein: '160mg Caffeine',
    price: '$12.00',
    desc: 'Pomegranate, Raspberry, Cranberry, Blue Blast. 0g Sugar.',
    placeholderColor: 'bg-blue-500',
    iconType: 'Zap',
    accent: '#3b82f6',
    image: 'tea1.jpg', // Minty/Dark
  },
  {
    id: 'tea-2',
    category: 'teas',
    title: 'Mega Tea: Citrus Sunshine',
    protein: '160mg Caffeine',
    price: '$12.00',
    desc: 'Orange, Peach, Mandarin, Green Apple. Bright and Zesty.',
    placeholderColor: 'bg-orange-500',
    iconType: 'Star',
    accent: '#f97316',
    image: 'tea2.jpg', // Minty/Dark
  },
  {
    id: 'tea-3',
    category: 'teas',
    title: 'Mega Tea: Purple Rain',
    protein: '160mg Caffeine',
    price: '$12.50',
    desc: 'Tropical Peach, Mango, Grape. A royal treat.',
    placeholderColor: 'bg-purple-600',
    iconType: 'Zap',
    accent: '#9333ea',
    image: 'tea1.jpg', // Minty/Dark
  },
  {
    id: 'tea-4',
    category: 'teas',
    title: 'Refresher: Captain America',
    protein: 'Kids Friendly',
    price: '$10.00',
    desc: 'Wild Berry, Cranberry, Blue Blast. Caffeine Free.',
    placeholderColor: 'bg-red-600',
    iconType: 'Star',
    accent: '#dc2626',
    image: 'tea2.jpg', // Minty/Dark
  },

  // --- WAFFLES ---
  {
    id: 'waffle-1',
    category: 'waffles',
    title: 'Guava Cream Waffle',
    protein: '31g Protein',
    price: '$16.00',
    desc: 'Guava, cream cheese, graham cracker, whipped cream.',
    placeholderColor: 'bg-pink-400',
    iconType: 'Cookie',
    accent: '#f472b6',
    image: 'waffle1.jpg', // Minty/Dark
  },
  {
    id: 'waffle-2',
    category: 'waffles',
    title: 'Nutoreos Waffle',
    protein: '31g Protein',
    price: '$16.50',
    desc: 'Nutella, Oreo cookies, cacao, whipped cream. Decadent.',
    placeholderColor: 'bg-stone-700',
    iconType: 'Cookie',
    accent: '#C5A059',
    image: 'waffle2.jpg', // Minty/Dark
  },
  {
    id: 'waffle-3',
    category: 'waffles',
    title: 'Banana Crunch',
    protein: '31g Protein',
    price: '$15.50',
    desc: 'Banana, peanuts, sugar free chocolate syrup.',
    placeholderColor: 'bg-yellow-500',
    iconType: 'Cookie',
    iconColor: 'text-black', // specific override for yellow bg
    accent: '#eab308',
    image: 'waffle1.jpg', // Minty/Dark
  },

  // --- COFFEE ---
  {
    id: 'coffee-1',
    category: 'coffee',
    title: 'Iced Caramel Macchiato',
    protein: '15g Protein',
    price: '$12.50',
    desc: 'Smooth espresso with vanilla and caramel drizzle.',
    placeholderColor: 'bg-orange-800',
    iconType: 'Coffee',
    accent: '#9a3412',
    image: 'coffee1.jpg', // Minty/Dark
  },
  {
    id: 'coffee-2',
    category: 'coffee',
    title: 'Protein Mocha',
    protein: '15g Protein',
    price: '$13.00',
    desc: 'Rich chocolate and coffee blend. 2g Sugar.',
    placeholderColor: 'bg-stone-800',
    iconType: 'Coffee',
    accent: '#78716c',
    image: 'coffee1.jpg', // Minty/Dark
  }
];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Custom Cursor Logic
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Scroll Listener for Nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => setCursorHovering(true);
  const handleMouseLeave = () => setCursorHovering(false);

  // Filter items
  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] text-[#f0f0f0] min-h-screen font-sans selection:bg-[#2dd4bf] selection:text-black overflow-x-hidden relative">
      {/* Global Styles & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        
        .font-serif-display { font-family: 'Playfair Display', serif; }
        .font-sans-grotesk { font-family: 'Space Grotesk', sans-serif; }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Smooth Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Hide scrollbar for gallery */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .clip-image-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .text-stroke-1 {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
      `}</style>

      {/* Noise Texture */}
      <div className="noise-overlay"></div>

      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[100] hidden md:block mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: `translate(-50%, -50%) scale(${cursorHovering ? 2.5 : 1})`,
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full opacity-80 backdrop-blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out px-6 py-4 flex justify-between items-center ${
          scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div 
          className="text-2xl font-serif-display font-bold italic tracking-tighter"
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          Protein<span className="text-[#2dd4bf]">Dreams</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-sans-grotesk text-sm uppercase tracking-widest">
          {['Menu', 'About', 'Location', 'Order'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#2dd4bf] transition-colors relative group"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2dd4bf] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-30 flex flex-col justify-center items-center space-y-8 font-serif-display text-4xl animate-fade-in">
          {['Menu', 'About', 'Location', 'Order'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#2dd4bf] italic"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}background1.png`}
            alt="Healthy Shake Background" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="font-sans-grotesk text-[#2dd4bf] uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in-up">
            Brooklyn, NY • Est. 2023
          </p>
          <h1 className="font-serif-display text-6xl md:text-9xl font-bold leading-[0.9] mix-blend-overlay opacity-90 mb-6">
            Fuel Your <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Dreams</span>
          </h1>
          <p className="font-sans-grotesk text-gray-300 max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
            Premium protein shakes, guilt-free waffles, and energy teas designed to power your lifestyle.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <button 
               onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
               className="px-8 py-4 bg-[#2dd4bf] text-black font-sans-grotesk font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
             >
               View Menu
             </button>
             <button 
               onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
               className="px-8 py-4 border border-white/30 text-white font-sans-grotesk font-bold uppercase tracking-wider hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
             >
               Find Us
             </button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown className="text-white/50 w-6 h-6" />
        </div>
      </header>

      {/* Infinite Marquee */}
      <div className="w-full bg-[#2dd4bf] py-4 overflow-hidden transform -skew-y-2 border-y-4 border-black">
        <div className="whitespace-nowrap flex animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black font-serif-display font-bold italic text-4xl md:text-6xl mx-8">
              • PROTEIN • ENERGY • WELLNESS • WAFFLES • SHAKES
            </span>
          ))}
        </div>
      </div>

      {/* Intro / Philosophy Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealElement>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-none mb-8">
              More than just <br />
              <span className="text-[#f472b6] italic">nutrition.</span>
            </h2>
            <p className="font-sans-grotesk text-gray-400 text-lg leading-relaxed mb-6">
              Located at 7615 18th Ave, we are redefining the protein experience. 
              Gone are the days of chalky shakes. We blend gourmet flavors with high-quality 
              protein to create treats that feel like cheating but fuel like champions.
            </p>
            <div className="flex gap-8 mt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif-display text-white">25g+</span>
                <span className="text-sm font-sans-grotesk text-gray-500 uppercase">Protein per shake</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif-display text-white">100%</span>
                <span className="text-sm font-sans-grotesk text-gray-500 uppercase">Guilt Free</span>
              </div>
            </div>
          </RevealElement>
          
          <RevealElement delay={200}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2dd4bf] to-[#f472b6] rounded-lg opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
              <img 
                src={`${import.meta.env.BASE_URL}imageSectionAbout.jpg`}
                alt="Protein Donuts and Shakes" 
                className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out object-cover h-[500px] w-full"
              />
            </div>
          </RevealElement>
        </div>
      </section>

      {/* Moving Gallery / Parallax Strip */}
      <section className="py-20 overflow-hidden bg-white/5">
         <div className="mb-12 text-center">
             <span className="font-sans-grotesk text-[#2dd4bf] uppercase tracking-widest text-sm">Visuals</span>
             <h3 className="font-serif-display text-4xl text-white mt-2">The Vibe</h3>
         </div>
         
         <div className="flex space-x-6 w-[200%] animate-marquee hover:[animation-play-state:paused]">
            {[
              "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2665&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] h-[400px] overflow-hidden relative group">
                <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
             {/* Duplicate for infinite loop */}
             {[
              "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2665&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-[300px] h-[400px] overflow-hidden relative group">
                <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              </div>
            ))}
         </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 max-w-7xl mx-auto relative min-h-screen">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2dd4bf] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="font-serif-display text-6xl md:text-8xl mb-4">The Menu</h2>
          <p className="font-sans-grotesk text-xl text-gray-400">High Protein. Low Guilt. Insane Flavor.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'shakes', 'teas', 'waffles', 'coffee'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm font-bold border transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#2dd4bf] text-black border-[#2dd4bf]' 
                  : 'bg-transparent text-white border-white/20 hover:border-[#2dd4bf] hover:text-[#2dd4bf]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
           {filteredItems.map((item) => (
             <BigImageCard 
               key={item.id} 
               item={item} 
               onEnter={handleMouseEnter} 
               onLeave={handleMouseLeave} 
             />
           ))}
        </div>

      </section>

      {/* Location Section */}
      <section id="location" className="relative py-32 bg-white text-black clip-image-slant">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-serif-display text-6xl md:text-8xl mb-8 leading-none">
                  Visit <br/> The <span className="text-[#2dd4bf]">Spot</span>
               </h2>
               
               <div className="space-y-8 font-sans-grotesk text-lg">
                  <div className="flex items-start space-x-4">
                     <MapPin className="mt-1 text-[#2dd4bf]" />
                     <div>
                        <p className="font-bold uppercase tracking-wide mb-1">Address</p>
                        <p>7615 18th Ave<br/>Brooklyn, NY 11214</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                     <Clock className="mt-1 text-[#f472b6]" />
                     <div>
                        <p className="font-bold uppercase tracking-wide mb-1">Hours</p>
                        <p>Mon - Fri: 7AM - 7PM</p>
                        <p>Sat - Sun: 8AM - 7PM</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-12 flex space-x-4">
                 <button 
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                  className="bg-black text-white px-8 py-4 uppercase font-bold tracking-wider hover:bg-[#2dd4bf] hover:text-black transition-colors"
                 >
                   Get Directions
                 </button>
               </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-200 overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
                 alt="Cafe Interior"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#2dd4bf] rounded-full flex items-center justify-center mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-serif-display italic font-bold text-xl text-black">Brooklyn</span>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-32 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
          
          <div className="mb-12 md:mb-0">
             <h2 className="font-serif-display text-4xl md:text-6xl italic mb-6">Protein<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#f472b6]">Dreams</span></h2>
             <div className="font-sans-grotesk text-gray-500 max-w-sm space-y-2">
               <p>Accepting all major credit cards.</p>
               <p>Delivery & Pick Up Available.</p>
               <p className="text-white hover:text-[#2dd4bf] cursor-pointer transition-colors">347-653-1665</p>
             </div>
          </div>

          <div className="flex space-x-8">
             <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
             </a>
             <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Coffee size={20} />
             </a>
             <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Zap size={20} />
             </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs font-mono text-gray-600 uppercase">
           <p>© 2024 Protein Dreams Brooklyn</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy</a>
             <a href="#" className="hover:text-white">Terms</a>
             <a href="#" className="hover:text-white">Sitemap</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

/* Helper Components */

const RevealElement = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useRefHook();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Simplified hook extraction for helper
const useRefHook = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return [ref, isVisible];
}

const BigImageCard = ({ item, onEnter, onLeave }) => (
  <div 
    className="group relative flex flex-col h-[500px] w-full bg-white/5 overflow-hidden border border-white/10 hover:border-[#2dd4bf]/50 transition-all duration-500 rounded-sm"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    {/* Image Container - Takes up 65% of card */}
    <div className="h-[65%] w-full overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
      <img 
        src={`${import.meta.env.BASE_URL}${item.image}`} 
        alt={item.title}
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Price Tag Overlay */}
      <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 border border-white/20 rounded-full">
         <span className="font-sans-grotesk font-bold text-[#2dd4bf]">{item.price}</span>
      </div>
    </div>

    {/* Content Container - Takes up 35% */}
    <div className="flex-1 p-6 relative flex flex-col justify-between bg-black/40 backdrop-blur-md border-t border-white/5">
        
        {/* Decorative background glow based on item accent */}
        <div 
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: item.accent || '#2dd4bf' }}
        ></div>

        <div>
           <div className="flex justify-between items-center mb-2">
             <h3 className="font-serif-display text-2xl group-hover:text-[#2dd4bf] transition-colors">{item.title}</h3>
             {item.iconType === 'Zap' && <Zap size={16} className="text-[#3b82f6]" />}
             {item.iconType === 'Star' && <Star size={16} className="text-[#f97316]" />}
             {item.iconType === 'Coffee' && <Coffee size={16} className="text-[#9a3412]" />}
             {item.iconType === 'Cookie' && <Cookie size={16} className="text-[#f472b6]" />}
           </div>
           <p className="font-sans-grotesk text-sm text-gray-400 line-clamp-2">{item.desc}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
           <span className="text-xs uppercase tracking-widest font-bold text-gray-300 border border-white/20 px-2 py-1 rounded-sm">
             {item.protein}
           </span>
           <button className="text-[#2dd4bf] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 font-sans-grotesk uppercase text-xs font-bold tracking-widest">
             Add to Order →
           </button>
        </div>
    </div>
  </div>
);

export default App;