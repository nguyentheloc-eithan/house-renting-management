import LayoutProvider from '@/components/layout/LayoutProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { App } from 'antd';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Turbo VMS - echeckin.vn',
  description: 'Turbo - Visitor Management',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className}`}>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
