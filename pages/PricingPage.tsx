import { Pricing } from '../components/Pricing';
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(() => {
    document.title = "各種料金のご案内｜ヨガ・ピラティススタジオ ZEN FLOW";
  }, []);

  return <Pricing />;
}