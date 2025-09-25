import kakesenImage from '../src/assets/kakesen.png';
import pira1Image from '../src/assets/pira1.jpg';
import pira2Image from '../src/assets/pira2.jpg';
import pira3Image from '../src/assets/pira3.jpg';
import pira4Image from '../src/assets/pira4.jpg';
import pira5Image from '../src/assets/pira5.jpg';

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function ServiceSelectionSection() {
  const services: ServiceOption[] = [
    {
      id: 'group-fitness',
      title: 'グループレッスン',
      description: '仲間と楽しく',
      image: pira1Image
    },
    {
      id: 'energy-boost',
      title: 'エネルギー向上',
      description: '活力アップ',
      image: pira2Image
    },
    {
      id: 'cardio-fitness',
      title: '有酸素運動',
      description: '持久力強化',
      image: pira3Image
    },
    {
      id: 'stress-relief',
      title: 'ストレス解消',
      description: '心身リラックス',
      image: pira4Image
    },
    {
      id: 'core-wellness',
      title: 'コア・ウェルネス',
      description: '体幹バランス',
      image: pira5Image
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img src={kakesenImage} alt="" className="h-16 mr-4" />
            <h2 className="text-2xl md:text-3xl font-luxury-heading text-secondary-brown-dark whitespace-nowrap">
              あなたに合ったピラティスを...あなただけに...
            </h2>
            <img src={kakesenImage} alt="" className="h-16 ml-4" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            どんなお悩みをお抱えでしょうか？
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-none" style={{ width: '60%' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0" style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 -mx-2"
            >
              {/* カードフレーム背景 */}
              <div
                className="w-full aspect-square bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/card-frame.png')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              />

              {/* 写真エリア - フレームの中央上部に配置 */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-lg overflow-hidden border-3 border-white shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* キャプション - 下部に透明背景で固定 */}
              <div className="absolute left-4 right-4 text-center" style={{ bottom: '22px' }}>
                <h3 className="text-xs font-luxury-heading text-secondary-brown-dark mb-1">
                  {service.title}
                </h3>
                <p className="text-xxs text-gray-600 leading-tight line-clamp-1" style={{ fontSize: '10px' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}