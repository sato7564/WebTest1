import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-green-900">私たちについて</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            ZEN FLOWは新宿の中心地にありながら、都市の喧騒を忘れさせる
            静寂と調和の空間です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1554196967-174b5a753c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBwaWxhdGVzJTIwc3R1ZGlvJTIwbW9kZXJufGVufDF8fHx8MTc1ODU2MTY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern zen pilates studio"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">ZEN FLOWスタジオの理念</Badge>
              <h3 className="text-2xl mb-4 text-green-900">
                身体と心の調和を追求
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                正しいヨガ・ピラティスの知識と実践方法をもとに皆様の心身への向き合い方、
                生き方を尊重し皆様の健康的なライフスタイルをサポート致します。個人のペースを大切にした指導を心がけています。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-green-200 bg-white/70">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="mb-2">アクセス抜群</h4>
                  <p className="text-sm text-gray-600">新宿駅南口徒歩3分</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/70">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="mb-2">完全予約制</h4>
                  <p className="text-sm text-gray-600">丁寧な個別指導</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ZEN FLOWの3つのコンセプト */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-green-900">ZEN FLOWの3つのコンセプト</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-white/80 hover:bg-white transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">心</span>
                </div>
                <h3 className="text-xl mb-3 text-green-900">マインドフルネス</h3>
                <p className="text-gray-700 leading-relaxed">呼吸と動きを通じて心の平穏を見つけ、日常のストレスから解放される時間を提供します。</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white/80 hover:bg-white transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">体</span>
                </div>
                <h3 className="text-xl mb-3 text-green-900">フィジカルウェルネス</h3>
                <p className="text-gray-700 leading-relaxed">正しい姿勢と柔軟性を身につけ、健康的で美しい身体づくりをサポートします。</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white/80 hover:bg-white transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">調</span>
                </div>
                <h3 className="text-xl mb-3 text-green-900">ライフバランス</h3>
                <p className="text-gray-700 leading-relaxed">仕事、家庭、自分時間の調和を保ち、持続可能な健康習慣の確立をお手伝いします。</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ウェルネスの定義 */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl mb-4 text-green-900">ZEN FLOWが考えるウェルネスとは</h2>
                <div className="w-12 h-1 bg-green-600 mx-auto"></div>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg text-center">
                  ウェルネスとは、身体的・精神的・社会的に健全で幸福な状態を意味します。
                </p>
                <p className="text-center">
                  ZEN FLOWでは、ヨガとピラティスを通じて、皆様が自分らしく輝ける生活を送れるよう、
                  心と身体の調和を大切にしながら、総合的なウェルネスの実現をサポートします。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-green-200 bg-gradient-to-r from-green-100 to-amber-100">
            <CardContent className="p-8">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl mb-4 text-green-900">
                ZEN FLOWスタジオの理念
              </h3>
              <div className="text-left space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  <p>正しいヨガ・ピラティスの知識と実践方法で心身の健康をサポートします</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  <p>皆様の心身への向き合い方、生き方を尊重した指導を行います</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  <p>健康的なライフスタイルの継続をサポートし、長期的な健康維持を目指します</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}