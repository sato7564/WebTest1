import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Clock, Train, Phone, Mail, Calendar } from 'lucide-react';

export function Access() {
  const studioHours = [
    { day: '月曜日', hours: '7:00 - 21:30' },
    { day: '火曜日', hours: '7:00 - 21:30' },
    { day: '水曜日', hours: '7:00 - 21:30' },
    { day: '木曜日', hours: '7:00 - 21:30' },
    { day: '金曜日', hours: '7:00 - 21:30' },
    { day: '土曜日', hours: '8:00 - 19:00' },
    { day: '日曜日', hours: '8:00 - 19:00' },
  ];

  const accessInfo = [
    { icon: <Train className="w-5 h-5" />, text: 'JR新宿駅南口から徒歩3分' },
    { icon: <Train className="w-5 h-5" />, text: '小田急線新宿駅から徒歩5分' },
    { icon: <Train className="w-5 h-5" />, text: '京王線新宿駅から徒歩7分' },
    { icon: <Train className="w-5 h-5" />, text: '都営地下鉄新宿駅から徒歩4分' },
  ];

  return (
    <section id="access" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-green-900">アクセス・営業時間</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            新宿駅から徒歩圏内の便利な立地。お仕事帰りやお買い物のついでにお立ち寄りください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 地図エリア */}
          <div>
            <Card className="border-green-200 h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>スタジオ所在地</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* 地図のプレースホルダー */}
                <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-green-700">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Google Mapがここに表示されます</p>
                    <p className="text-sm">新宿区西新宿1-1-1 新宿ビル5F</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 text-green-900">住所</h4>
                    <p className="text-gray-700">
                      〒160-0023<br />
                      東京都新宿区西新宿1-1-1 新宿ビル5F
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-3 text-green-900">アクセス</h4>
                    <div className="space-y-2">
                      {accessInfo.map((info, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="text-green-600">{info.icon}</div>
                          <span className="text-gray-700">{info.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 営業時間・連絡先 */}
          <div className="space-y-6">
            {/* 営業時間 */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>スタジオ営業時間</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studioHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-green-100 last:border-b-0">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-green-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800">
                    ※ 祝日は日曜日と同じ営業時間です<br />
                    ※ 年末年始・お盆期間は休業いたします
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 連絡先 */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>お問い合わせ</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">電話番号</p>
                    <p className="text-lg">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">メールアドレス</p>
                    <p>info@zen-flow-studio.jp</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    オンライン予約
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* スタジオ設備 */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>スタジオ設備</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>更衣室完備</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>シャワー室</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>ロッカー</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>ウォーターサーバー</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>マット無料貸出</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>プロップ各種</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>空気清浄機</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>WiFi完備</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* お知らせ */}
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl mb-4 text-green-900">
              スタジオからのお知らせ
            </h3>
            <div className="space-y-3 text-gray-700 text-sm max-w-3xl mx-auto">
              <p>• 2024年1月より新クラス「モーニングフロー」がスタートします（平日7:00-8:00）</p>
              <p>• 初回体験レッスン無料キャンペーン実施中！ぜひお気軽にお越しください</p>
              <p>• スタジオ見学は随時受け付けております。事前にお電話でご連絡ください</p>
            </div>
            <div className="mt-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white mr-4">
                体験予約をする
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
    </section>
  );
}