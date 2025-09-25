import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: `url('/images/footer-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex justify-center py-12">
        <div className="w-full max-w-5xl px-4" style={{ width: '60%' }}>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 左列：店舗名・アクセス先part1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-gold">ウェルス&ピラティス</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>ホーム</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
              <Link to="/news" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>お知らせ</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
              <Link to="/beginner" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>はじめての方へ</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
            </nav>
          </div>

          {/* 中列：アクセス先part2 */}
          <div>
            <nav className="space-y-2 mt-12">
              <Link to="/services" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>検査・診療のご紹介</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
              <Link to="/pricing" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>各種料金</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
              <Link to="/access" className="block text-white/80 hover:text-white transition-colors text-lg group">
                <div className="flex justify-between items-center">
                  <span>アクセスMAP</span>
                  <span className="text-primary-gold transform group-hover:translate-y-1 transition-transform">∨</span>
                </div>
                <div className="border-b border-primary-gold mt-1"></div>
              </Link>
            </nav>
          </div>

          {/* 右列：営業時間の表 */}
          <div>
            <div className="bg-primary-gold p-4">
              <h4 className="text-lg font-bold text-secondary-brown-dark mb-4 text-center">営業時間</h4>
              <table className="w-full text-xs text-secondary-brown-dark">
                <thead>
                  <tr className="border-b border-secondary-brown-dark/30">
                    <th className="py-2 text-center font-medium">営業時間</th>
                    <th className="py-2 text-center font-medium">月</th>
                    <th className="py-2 text-center font-medium">火</th>
                    <th className="py-2 text-center font-medium">水</th>
                    <th className="py-2 text-center font-medium">木</th>
                    <th className="py-2 text-center font-medium">金</th>
                    <th className="py-2 text-center font-medium">土</th>
                    <th className="py-2 text-center font-medium">日</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b border-secondary-brown-dark/20">
                    <td className="py-2 text-center font-medium">9:00〜13:00</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">▲</td>
                    <td className="py-2 text-center text-blue-600">休診</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-center font-medium">14:30〜17:00</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center">●</td>
                    <td className="py-2 text-center text-blue-600">休診</td>
                    <td className="py-2 text-center text-blue-600">休診</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 下の行：電話番号と住所 */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/20">
          {/* 電話番号 */}
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img src="/images/kakkohazime.png" alt="" className="h-12 mr-3" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(45%) saturate(2427%) hue-rotate(15deg) brightness(100%) contrast(85%)' }} />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-primary-gold">ご予約・お問い合わせ</h3>
                <div className="text-2xl font-bold text-primary-gold">tel.092-XXX-XXXX</div>
              </div>
              <img src="/images/kakkoowari.png" alt="" className="h-12 ml-3" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(45%) saturate(2427%) hue-rotate(15deg) brightness(100%) contrast(85%)' }} />
            </div>
          </div>

          {/* 住所 */}
          <div className="text-center">
            <div className="text-sm text-primary-gold">〒810-0022</div>
            <div className="text-sm text-primary-gold">福岡県福岡市中央区薬院3丁目14−22</div>
            <div className="text-sm text-primary-gold">大通駅やまひろセンター地下1階</div>
          </div>
        </div>

        {/* ロゴ */}
        <div className="text-center my-8">
          <img src="/images/rogo.png" alt="ウェルス&ピラティス" className="mx-auto h-96" />
          <div className="text-lg font-bold mt-2 text-primary-gold">ウェルス&ピラティス</div>
        </div>

        {/* コピーライト */}
        <div className="text-center border-t border-white/20 pt-4">
          <div className="text-xs text-white/60">
            Copyright © 2024 ウェルス&ピラティス All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}