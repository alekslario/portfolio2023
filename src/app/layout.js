// import { Inter } from 'next/font/google';
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
    },
    {
      path: '../../public/fonts/Calibre-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Calibre-Semibold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-calibre',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={calibre.variable}>{children}</body>
    </html>
  );
}
