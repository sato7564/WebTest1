import { Access } from '../components/Access';
import { useEffect } from 'react';

export default function AccessPage() {
  useEffect(() => {
    document.title = "ZEN FLOW - ヨガ・ピラティススタジオ";
  }, []);

  return <Access />;
}