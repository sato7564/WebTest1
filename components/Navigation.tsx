import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import navigationBg from '../src/assets/navigation-background.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // 上段ヘッダーの高さ（アスペクト比に基づいて計算）
      const windowWidth = window.innerWidth;
      const headerHeight = (windowWidth * 790) / 1414; // 新しい画像のアスペクト比
      setIsScrolled(window.scrollY > headerHeight - 120); // ナビゲーションの高さ(120px)を考慮
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true }); // リサイズ時も再計算
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '/about', label: '私たちについて', english: 'About' },
    { href: '/beginner', label: '初めての方へ', english: 'Beginner' },
    { href: '/pricing', label: '料金案内', english: 'Pricing' },
    { href: '/#access', label: 'アクセス', english: 'Access' },
  ];

  return (
    <nav
      className={`text-white transition-all duration-300 z-50 border-b border-primary-gold/20 ${
        isScrolled
          ? 'fixed top-0 left-0 right-0 shadow-luxury'
          : 'relative'
      }`}
      style={{
        backgroundImage: `url(${navigationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center" style={{ height: '120px' }}>
          {/* Luxury Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center shadow-luxury">
              <Home className="w-6 h-6 text-secondary-brown-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-gold tracking-wider" style={{ fontFamily: 'Kaisei Decol, serif' }}>ウェルス&ピラティス</span>
              <div className="text-sm text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>ピラティススタジオ</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group relative"
              >
                <div className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-primary-gold'
                    : 'text-white hover:text-primary-gold'
                }`}>
                  <span className="text-lg font-medium" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>{item.label}</span>
                  <span className="text-sm opacity-70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.english}</span>
                </div>
                {location.pathname === item.href && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-gold rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* 電話番号 + アクセス情報 - 右端 */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 電話番号エリア */}
            <div className="text-right">
              <div className="text-xs text-white/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>TEL</div>
              <div className="text-lg text-primary-gold font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>092-XXX-XXXX</div>
            </div>

            {/* 仕切り線 */}
            <div className="h-12 w-px bg-white/20"></div>

            {/* アクセス情報エリア */}
            <div className="text-right">
              <div className="text-xs text-white/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>ACCESS</div>
              <div className="text-sm text-white/90 leading-tight" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}>
                地下鉄七隈線「薬院大通駅」<br />徒歩5分
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary-gold/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex flex-col space-y-1 transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-primary-gold' : 'text-white hover:text-primary-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="text-base opacity-70">{item.english}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}