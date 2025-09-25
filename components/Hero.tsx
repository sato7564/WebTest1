import { Link } from 'react-router-dom';
import { Zap, Star, Trophy, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="hero-luxury">
      {/* Luxury Overlay */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Luxury Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-primary-gold" />
              <span className="text-sm font-medium text-white">アクティブ ピラティス スタジオ</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-luxury-heading text-6xl md:text-8xl lg:text-9xl mb-8 tracking-wide font-bold">
              ZEN FLOW
            </h1>
            
            {/* Luxury Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-primary-gold"></div>
              <Star className="w-6 h-6 text-primary-gold mx-4" />
              <div className="w-16 h-px bg-primary-gold"></div>
            </div>

            <p className="text-luxury-body text-2xl md:text-3xl mb-8 leading-relaxed font-medium">
              あなたの身体に…新しいエネルギーを…
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              ピラティスの力で、強く美しい身体づくりを。<br />
              あなたのペースで、あなたの目標に向かって。
            </p>
          </div>

          {/* Pilates Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-gold/30">
                <Zap className="w-10 h-10 text-primary-gold" />
              </div>
              <h3 className="text-luxury-heading text-xl mb-4 text-white">コアから強化</h3>
              <p className="text-white/80 leading-relaxed">
                深層筋を鍛え、内側から強く美しい身体を作り上げます
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-gold/30">
                <Activity className="w-10 h-10 text-primary-gold" />
              </div>
              <h3 className="text-luxury-heading text-xl mb-4 text-white">動的バランス</h3>
              <p className="text-white/80 leading-relaxed">
                流れるような動きで柔軟性と筋力を同時に向上
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-gold/30">
                <Trophy className="w-10 h-10 text-primary-gold" />
              </div>
              <h3 className="text-luxury-heading text-xl mb-4 text-white">パーソナル指導</h3>
              <p className="text-white/80 leading-relaxed">
                あなたの目標とレベルに合わせたオーダーメイド指導
              </p>
            </div>
          </div>

          {/* Pilates CTA */}
          <div className="space-y-8">
            <p className="text-luxury-body text-xl text-primary-gold font-medium">
              あなたの理想の身体へ、エネルギッシュに挑戦しませんか
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/beginner">
                <button className="btn-pilates-energy text-lg px-10 py-4 shadow-pilates-glow">
                  無料体験レッスン予約
                </button>
              </Link>
              <Link to="/access">
                <button className="bg-white/10 backdrop-blur-sm border-2 border-primary-gold text-white hover:bg-primary-gold hover:text-white font-medium px-10 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-pilates-glow text-lg">
                  アクティブスタジオ見学
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-primary-gold/30">
            <div className="w-px h-8 bg-primary-gold animate-pulse"></div>
          </div>
          <span className="text-primary-gold text-xs font-medium tracking-widest">SCROLL</span>
        </div>
      </div>
    </section>
  );
}