import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Users, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Beginner() {
  const steps = [
    {
      step: 1,
      title: 'お電話・Webでの予約が必要となります',
      description: 'ZEN FLOWは完全予約制となっております。お電話またはWebにてご予約の上、ご来店ください。',
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 2,
      title: '初回体験当日',
      description: '受付でカウンセリングシート・同意書の記入をしていただき、担当インストラクターからZEN FLOWの説明があります。',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      step: 3,
      title: '体験レッスン後のフィードバック',
      description: 'レッスン後、体調や感想をお聞かせください。不安な点があれば何でもご相談ください。',
      icon: <Star className="w-6 h-6" />,
    },
    {
      step: 4,
      title: '次回のご予約・入会のご案内',
      description: 'ご希望に応じて次回のレッスン予約や入会手続きについてご案内いたします。',
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const benefits = [
    '完全初心者の方でも安心してスタート',
    '少人数制で丁寧な個別指導',
    '体の硬い方でも無理なく参加可能',
    '運動経験がなくても大丈夫',
    '年齢や性別を問わずご参加いただけます',
    'マットやプロップは無料でレンタル',
  ];

  return (
    <section id="beginner" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-green-900">はじめての方へ</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            初めてのヨガ・ピラティスでも安心してご参加いただけるよう、
            丁寧にサポートいたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652347141247-5788de175766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nJTIwY2xhc3N8ZW58MXx8fHwxNzU4NTYxNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Yoga instructor teaching class"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl mb-6 text-green-900">
              安心してお始めいただけます
            </h3>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              体験レッスンを予約する
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl text-center mb-12 text-green-900">
            体験レッスンの流れ
          </h3>
          <div className="text-center mb-8">
            <h2 className="text-sm text-green-600 mb-2">ステップ1から4までの流れ</h2>
            <h2 className="text-xs text-gray-600 mb-2">1回目から4回目までのご利用手順</h2>
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <span>1. 予約</span>
              <span>2. 当日</span>
              <span>3. フィードバック</span>
              <span>4. ご案内</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <Card key={step.step} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-green-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-sm text-green-600 mb-2">STEP {step.step}</div>
                  <h4 className="text-lg mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto border-green-200 bg-gradient-to-r from-green-50 to-amber-50">
            <CardContent className="p-8">
              <h3 className="text-xl mb-6 text-green-900">
                持ち物・注意事項
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-green-800 mb-3">お持ちいただくもの</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 動きやすい服装（着替えスペースあり）</li>
                    <li>• タオル（汗拭き用）</li>
                    <li>• 水分補給用のお飲み物</li>
                    <li>• 身分証明書（初回のみ）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-800 mb-3">注意事項</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• レッスン2時間前までにお食事をお済ませください</li>
                    <li>• 妊娠中の方は事前にご相談ください</li>
                    <li>• 体調不良の際は無理をせずお休みください</li>
                    <li>• マット・プロップは無料でレンタルできます</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                ご不明な点やご心配なことがございましたら、
                お気軽にお問い合わせください。
                スタッフが丁寧にご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  無料体験予約
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  お電話で相談
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}