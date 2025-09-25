import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Gift } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      id: 'drop-in',
      name: 'ドロップイン',
      price: '3,500',
      period: '1回',
      description: 'お試しでクラスを受講したい方におすすめ',
      features: [
        '全クラス受講可能',
        'マット・プロップ無料レンタル',
        '当日予約OK',
        '有効期限なし',
      ],
      popular: false,
      color: 'border-green-200',
    },
    {
      id: '4-times',
      name: '4回チケット',
      price: '12,000',
      period: '4回分',
      originalPrice: '14,000',
      description: '定期的に通いたい方に人気のプラン',
      features: [
        '全クラス受講可能',
        'マット・プロップ無料レンタル',
        '有効期限2ヶ月',
        'オンライン予約優先',
        '振替制度あり',
      ],
      popular: true,
      color: 'border-green-400 ring-2 ring-green-200',
    },
    {
      id: '8-times',
      name: '8回チケット',
      price: '22,000',
      period: '8回分',
      originalPrice: '28,000',
      description: '本格的に始めたい方におすすめ',
      features: [
        '全クラス受講可能',
        'マット・プロップ無料レンタル',
        '有効期限3ヶ月',
        'オンライン予約優先',
        '振替制度あり',
        '無料カウンセリング付き',
      ],
      popular: false,
      color: 'border-amber-300',
    },
    {
      id: 'unlimited',
      name: 'マンスリー無制限',
      price: '18,000',
      period: '月額',
      description: 'たくさん通いたい方に最適',
      features: [
        '全クラス受講し放題',
        'マット・プロップ無料レンタル',
        '月何回でもOK',
        '優先予約権',
        '振替制度あり',
        'パーソナルセッション割引',
        '特別ワークショップ参加権',
      ],
      popular: false,
      color: 'border-purple-300',
    },
  ];

  const additionalServices = [
    {
      name: 'パーソナルセッション',
      price: '8,000',
      duration: '60分',
      description: 'マンツーマンでの個別指導'
    },
    {
      name: 'ペアセッション',
      price: '6,000',
      duration: '60分',
      description: '2名様での個別指導（お一人様あたり）'
    },
    {
      name: 'オンラインクラス',
      price: '2,000',
      duration: '45分',
      description: 'ご自宅からリアルタイム参加'
    },
  ];

  return (
    <section id="price" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-green-900">各種料金のご案内</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            ライフスタイルに合わせて選べる様々なプランをご用意しております。
          </p>
        </div>

        {/* 初回体験キャンペーン */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto border-green-400 bg-gradient-to-r from-green-50 to-amber-50">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-green-600 mr-3" />
                <Badge className="bg-green-600 text-white text-sm px-3 py-1">
                  初回限定キャンペーン
                </Badge>
              </div>
              <h3 className="text-2xl mb-4 text-green-900">
                初回体験レッスン 
                <span className="text-3xl mx-2">無料</span>
              </h3>
              <p className="text-gray-700 mb-6">
                通常3,500円の体験レッスンを初回のみ無料でお試しいただけます
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                無料体験を予約する
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 料金プラン */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.color} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    人気プラン
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-green-900">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl text-green-700">¥{plan.price}</span>
                    <span className="text-sm text-gray-600">/{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through">¥{plan.originalPrice}</span>
                      <Badge variant="destructive" className="ml-2 text-xs">
                        ¥{parseInt(plan.originalPrice) - parseInt(plan.price)}お得
                      </Badge>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  このプランを選ぶ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 追加サービス */}
        <div className="mb-12">
          <h3 className="text-2xl text-center mb-8 text-green-900">
            追加サービス
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg mb-2 text-green-900">{service.name}</h4>
                  <div className="text-2xl text-green-700 mb-2">
                    ¥{service.price}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {service.duration}
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 注意事項 */}
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-6">
            <h4 className="text-lg mb-4 text-gray-900">ご利用にあたって</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>• 全て税込価格です</li>
                <li>• 初回体験は予約制です</li>
                <li>• キャンセルは前日まで可能です</li>
                <li>• チケットの譲渡・返金はできません</li>
              </ul>
              <ul className="space-y-2">
                <li>• お支払いは現金・クレジットカード対応</li>
                <li>• 学生割引・シニア割引もございます</li>
                <li>• 詳細は店舗までお問い合わせください</li>
                <li>• 休会制度もご利用いただけます</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}