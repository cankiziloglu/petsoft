import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PetSoft Pet Daycare Software',
  description: 'PetSoft is the best pet daycare software for your business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-50 text-gray-900 text-sm min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
