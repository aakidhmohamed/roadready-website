import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KleenCar | Make Your Used Car Feel New to You',
  description: 'Build a focused car-care setup for your new-to-you car in Sri Lanka. Answer three questions and see your recommended starting point.',
  keywords: ['car care Sri Lanka', 'used car cleaning kit', 'car cleaning setup', 'KleenCar'],
  openGraph: { title: 'KleenCar | Your first proper car-care reset', description: 'A focused car-care setup built around your car, your priorities and your preferred level of care.', type: 'website', locale: 'en_LK' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

