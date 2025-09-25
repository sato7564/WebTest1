import { ScrollableHeader } from './ScrollableHeader';
import { Navigation } from './Navigation';

export function TwoTierHeader() {
  return (
    <div className="relative">
      {/* 上段: スクロール可能ヘッダー（ピラティス画像） */}
      <ScrollableHeader />

      {/* 下段: 固定ヘッダー（ナビゲーション） */}
      <Navigation />
    </div>
  );
}