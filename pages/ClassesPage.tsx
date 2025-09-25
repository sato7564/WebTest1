import { Classes } from '../components/Classes';
import { useEffect } from 'react';

export default function ClassesPage() {
  useEffect(() => {
    document.title = "クラス・プログラムのご紹介｜ヨガ・ピラティススタジオ ZEN FLOW";
  }, []);

  return <Classes />;
}