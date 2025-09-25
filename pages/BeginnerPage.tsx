import { Beginner } from '../components/Beginner';
import { useEffect } from 'react';

export default function BeginnerPage() {
  useEffect(() => {
    document.title = "はじめての方へ｜ヨガ・ピラティススタジオ ZEN FLOW";
  }, []);

  return <Beginner />;
}