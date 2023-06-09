import { Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Alex's Portfolio",
  author: 'Aleksandrs Larionovs',
  description: 'portfolio',
  keywords: 'portfolio, developer, web design, javascript, css',
  icons: {
    icon: '/icon.png',
  },
};

const calibre = localFont({
  src: [
    {
      path: '../../public/fonts/Calibre-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Calibre-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--calibre',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={calibre.variable + ' ' + roboto_mono.variable}>
      <body>{children}</body>
    </html>
  );
}
