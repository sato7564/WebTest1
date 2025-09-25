import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Users, Target, Zap, Flower, Moon, Heart } from 'lucide-react';

export function Classes() {
  const yogaClasses = [
    {
      id: 'basic-yoga',
      name: 'ベーシックヨガ',
      level: '初級',
      duration: '60分',
      capacity: '12名',
      icon: <Flower className="w-6 h-6" />,
      description: 'ヨガの基本的なポーズと呼吸法を学び、心身の調和を深めるクラスです。',
      benefits: ['柔軟性向上', 'ストレス軽減', '姿勢改善'],
      color: 'green',
    },
    {
      id: 'power-yoga',
      name: 'パワーヨガ',
      level: '中級〜上級',
      duration: '75分',
      capacity: '10名',
      icon: <Zap className="w-6 h-6" />,
      description: '力強い動きと呼吸を連動させ、筋力と持久力を高める動的なヨガクラスです。',
      benefits: ['体力向上', '筋力強化', 'シェイプアップ'],
      color: 'amber',
    },
    {
      id: 'relax-yoga',
      name: 'リラックスヨガ',
      level: '全レベル',
      duration: '60分',
      capacity: '15名',
      icon: <Moon className="w-6 h-6" />,
      description: 'ゆっくりとした動きと深い呼吸で心身の緊張をほぐし、リラクゼーションを促します。',
      benefits: ['深いリラックス', '自律神経調整', '睡眠の質向上'],
      color: 'purple',
    },
    {
      id: 'maternity-yoga',
      name: 'マタニティヨガ',
      level: '妊婦さん向け',
      duration: '60分',
      capacity: '8名',
      icon: <Heart className="w-6 h-6" />,
      description: '妊娠中の身体の変化に合わせた安全なヨガで、母子の健康をサポートします。',
      benefits: ['安産準備', '腰痛軽減', 'リラックス効果'],
      color: 'pink',
    },
  ];

  const pilatesClasses = [
    {
      id: 'basic-pilates',
      name: 'ベーシックピラティス',
      level: '初級',
      duration: '60分',
      capacity: '10名',
      icon: <Target className="w-6 h-6" />,
      description: 'ピラティスの基本的な動きとコアの使い方を学ぶ入門クラスです。',
      benefits: ['コア強化', '姿勢改善', '身体の歪み改善'],
      color: 'blue',
    },
    {
      id: 'machine-pilates',
      name: 'マシンピラティス',
      level: '中級',
      duration: '60分',
      capacity: '4名',
      icon: <Target className="w-6 h-6" />,
      description: '専用マシンを使用して効率的に筋力と柔軟性を向上させるクラスです。',
      benefits: ['効率的な筋トレ', '可動域拡大', '正確な動作習得'],
      color: 'red',
    },
  ];

  const privateClasses = [
    {
      id: 'personal-yoga',
      name: 'パーソナルヨガ',
      level: '全レベル',
      duration: '60分',
      capacity: '1名',
      icon: <Users className="w-6 h-6" />,
      description: 'お客様の目標と体調に合わせたマンツーマンのヨガレッスンです。',
      benefits: ['個別指導', '目標達成', '柔軟なスケジュール'],
      color: 'green',
    },
    {
      id: 'personal-pilates',
      name: 'パーソナルピラティス',
      level: '全レベル',
      duration: '60分',
      capacity: '1名',
      icon: <Users className="w-6 h-6" />,
      description: 'お客様の身体の特徴に合わせたマンツーマンのピラティスレッスンです。',
      benefits: ['個別アプローチ', '効率的改善', '専門指導'],
      color: 'blue',
    },
  ];

  const specialPrograms = [
    {
      id: 'athlete-conditioning',
      name: 'アスリート向けコンディショニング',
      level: 'アスリート向け',
      duration: '90分',
      capacity: '6名',
      icon: <Zap className="w-6 h-6" />,
      description: 'スポーツパフォーマンス向上と怪我予防を目的とした専門プログラムです。',
      benefits: ['パフォーマンス向上', '怪我予防', '回復促進'],
      color: 'orange',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case '初級': return 'bg-green-100 text-green-800';
      case '中級': return 'bg-amber-100 text-amber-800';
      case '中級〜上級': return 'bg-amber-100 text-amber-800';
      case '上級': return 'bg-red-100 text-red-800';
      case '妊婦さん向け': return 'bg-pink-100 text-pink-800';
      case 'アスリート向け': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-100';
      case 'amber': return 'text-amber-600 bg-amber-100';
      case 'purple': return 'text-purple-600 bg-purple-100';
      case 'blue': return 'text-blue-600 bg-blue-100';
      case 'red': return 'text-red-600 bg-red-100';
      case 'indigo': return 'text-indigo-600 bg-indigo-100';
      case 'pink': return 'text-pink-600 bg-pink-100';
      case 'orange': return 'text-orange-600 bg-orange-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-green-900">クラス・プログラムのご紹介</h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            様々なレベルや目的に合わせたクラスをご用意しております。
            あなたに最適なプログラムを見つけてください。
          </p>
        </div>

        {/* ヨガクラス */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8 text-green-900">ヨガクラスについて</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {yogaClasses.map((classItem) => (
              <Card key={classItem.id} className="border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${getIconColor(classItem.color)}`}>
                      {classItem.icon}
                    </div>
                    <Badge className={getLevelColor(classItem.level)}>
                      {classItem.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-green-900">{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>時間: {classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-green-600" />
                      <span>定員: {classItem.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-green-800">期待できる効果</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    このクラスを予約
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ピラティスクラス */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8 text-green-900">ピラティスクラスについて</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pilatesClasses.map((classItem) => (
              <Card key={classItem.id} className="border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${getIconColor(classItem.color)}`}>
                      {classItem.icon}
                    </div>
                    <Badge className={getLevelColor(classItem.level)}>
                      {classItem.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-green-900">{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>時間: {classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-green-600" />
                      <span>定員: {classItem.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-green-800">期待できる効果</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    このクラスを予約
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* プライベートレッスン */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8 text-green-900">プライベートレッスンについて</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {privateClasses.map((classItem) => (
              <Card key={classItem.id} className="border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${getIconColor(classItem.color)}`}>
                      {classItem.icon}
                    </div>
                    <Badge className="bg-amber-100 text-amber-800">
                      {classItem.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-green-900">{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>時間: {classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-green-600" />
                      <span>定員: {classItem.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-green-800">期待できる効果</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    size="sm"
                  >
                    このクラスを予約
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 特別プログラム */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8 text-green-900">特別プログラムについて</h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto mb-12">
            {specialPrograms.map((classItem) => (
              <Card key={classItem.id} className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${getIconColor(classItem.color)}`}>
                      {classItem.icon}
                    </div>
                    <Badge className={getLevelColor(classItem.level)}>
                      {classItem.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-green-900">{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>時間: {classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-green-600" />
                      <span>定員: {classItem.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-green-800">期待できる効果</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    size="sm"
                  >
                    このクラスを予約
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto border-green-200 bg-white/70">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4 text-green-900">
                どのクラスを選べばいいか迷っている方へ
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                お客様の目標や体調、経験に合わせて最適なクラスをご提案いたします。
                無料カウンセリングも承っておりますので、お気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  無料カウンセリング予約
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  スケジュールを見る
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}