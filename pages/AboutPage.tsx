import { About } from '../components/About';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = "私たちについて｜ヨガ・ピラティススタジオ ZEN FLOW";
  }, []);

  return <About />;
}