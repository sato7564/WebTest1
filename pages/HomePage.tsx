import { TwoTierHeader } from '../components/TwoTierHeader';
import { ServiceSelectionSection } from '../components/ServiceSelectionSection';
import { useEffect, useState } from 'react';
import kakesenImage from '../src/assets/kakesen.png';
import tatemonoImage from '../src/assets/tatemono.png';
import ban1Image from '../src/assets/1ban.png';
import ban2Image from '../src/assets/2ban.png';
import ban3Image from '../src/assets/3ban.png';
import pira1Image from '../src/assets/pira1.jpg';
import pira2Image from '../src/assets/pira2.jpg';
import pira3Image from '../src/assets/pira3.jpg';
import pira4Image from '../src/assets/pira4.jpg';
import pira5Image from '../src/assets/pira5.jpg';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      const headerHeight = (windowWidth * 790) / 1414; // 新しい画像のアスペクト比
      setIsScrolled(window.scrollY > headerHeight - 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* 既存のNavigationの代わりに2段ヘッダーを使用 */}
      <TwoTierHeader />

      {/* ナビゲーション固定時のスペーサー */}
      {isScrolled && <div style={{ height: '120px' }} />}

      {/* メインコンテンツエリア */}
      <main className="pt-8">
        {/* 営業時間セクション */}
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img src={kakesenImage} alt="" className="h-24 mr-4" />
              <h2 className="text-3xl md:text-4xl font-luxury-heading text-secondary-brown-dark whitespace-nowrap">
                営業時間
              </h2>
              <img src={kakesenImage} alt="" className="h-24 ml-4" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              日曜・祝日休診　当院は<span className="text-red-600 font-semibold">完全予約制</span>です。ご来院の際は事前にお電話をお願いいたします。
            </p>
          </div>

          <div className="flex justify-center items-start space-x-8">
            <div className="bg-white shadow-lg overflow-hidden max-w-3xl w-full">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#8B7355' }} className="text-white">
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>

                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      月
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      火
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      水
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      木
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      金
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      土
                    </th>
                    <th className="py-3 px-4 text-center font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      日
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-center font-medium bg-gray-50" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      9:00-12:00
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-green-500"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-blue-600 font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      休診
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-center font-medium bg-gray-50" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      13:30-17:00
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-green-500"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-blue-600 font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      休診
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-center font-medium bg-gray-50" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      18:00-20:00
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-red-600 font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      休診
                    </td>
                    <td className="py-4 px-4 text-center text-blue-600 font-medium" style={{ fontFamily: 'Kaisei Decol, serif' }}>
                      休診
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 建物画像 - 円形フレーム */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary-gold">
                <img
                  src={tatemonoImage}
                  alt="ウェルス&ピラティス 外観"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          <div className="text-center mt-8">
            <a href="https://beauty.hotpepper.jp/kr/slnH000636264/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-gold hover:bg-primary-gold/90 text-secondary-brown-dark font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-300">
              今すぐ予約する
            </a>
          </div>
        </section>
      </main>


      {/* 初めての方へセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img src={kakesenImage} alt="" className="h-24 mr-4" />
              <h2 className="text-3xl md:text-4xl font-luxury-heading text-secondary-brown-dark whitespace-nowrap">
                初めての方へ
              </h2>
              <img src={kakesenImage} alt="" className="h-24 ml-4" />
            </div>
            <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ご来院いただく前に下記1～3のリンク先の書類にご記入の上、ご持参いただくとスムーズになります。
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <img src={ban1Image} alt="1番" className="w-full h-full object-contain" />
                    </div>
                    <a
                      href="#"
                      className="text-lg font-medium text-secondary-brown-dark hover:text-primary-gold transition-colors duration-300"
                    >
                      栄養採血を受けられる方へ
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <img src={ban2Image} alt="2番" className="w-full h-full object-contain" />
                    </div>
                    <a
                      href="#"
                      className="text-lg font-medium text-secondary-brown-dark hover:text-primary-gold transition-colors duration-300"
                    >
                      問診票
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <img src={ban3Image} alt="3番" className="w-full h-full object-contain" />
                    </div>
                    <a
                      href="#"
                      className="text-lg font-medium text-secondary-brown-dark hover:text-primary-gold transition-colors duration-300"
                    >
                      栄養問診票
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSelectionSection />


      {/* アクセスセクション */}
      <section id="access" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img src={kakesenImage} alt="" className="h-24 mr-4" />
              <h2 className="text-3xl md:text-4xl font-luxury-heading text-secondary-brown-dark whitespace-nowrap">
                アクセス
              </h2>
              <img src={kakesenImage} alt="" className="h-24 ml-4" />
            </div>
          </div>

        </div>

        {/* Google Map - 横幅いっぱい + フロート住所情報 */}
        <div className="relative w-full h-96 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7234567890123!2d130.3947!3d33.5825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzU3LjAiTiAxMzDCsDIzJzQxLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp&q=福岡県福岡市中央区薬院３丁目14−22"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ウェルス&ピラティス 地図"
          />

          {/* フロート住所情報 - 左上 */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-sm z-10">
            <h3 className="text-lg font-luxury-heading text-secondary-brown-dark mb-4">
              ウェルス&ピラティス
            </h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary-gold rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs text-secondary-brown-dark">📍</span>
                </div>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    〒810-0022<br />
                    福岡県福岡市中央区薬院３丁目14−22<br />
                    プレザント薬院102号室
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary-gold rounded-full flex items-center justify-center">
                  <span className="text-xs text-secondary-brown-dark">🚇</span>
                </div>
                <p className="text-gray-700 text-sm">
                  地下鉄七隈線「薬院大通駅」徒歩5分
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary-gold rounded-full flex items-center justify-center">
                  <span className="text-xs text-secondary-brown-dark">📞</span>
                </div>
                <p className="text-gray-700 text-sm">
                  TEL: 092-XXX-XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <main className="pt-8">
        <section className="container mx-auto px-4 py-16">
          {/* お問い合わせ */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <img src={kakesenImage} alt="" className="h-20 mr-4" />
              <h3 className="text-3xl font-luxury-heading text-secondary-brown-dark whitespace-nowrap">
                お問い合わせ
              </h3>
              <img src={kakesenImage} alt="" className="h-20 ml-4" />
            </div>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const furigana = formData.get('furigana');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const message = formData.get('message');

              const subject = 'ウェルス&ピラティス お問い合わせ';
              const body = `お名前: ${name}\nフリガナ: ${furigana}\n電話番号: ${phone}\nメールアドレス: ${email}\n\nお問い合わせ内容:\n${message}`;

              window.location.href = `mailto:sato7564@outlook.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お名前 *</label>
                  <input name="name" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">フリガナ *</label>
                  <input name="furigana" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">電話番号 *</label>
                  <input name="phone" type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス *</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容 *</label>
                <textarea name="message" required rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent" placeholder="お問い合わせ内容をご記入ください"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-primary-gold hover:bg-primary-gold/90 text-secondary-brown-dark font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-300">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}