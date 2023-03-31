import Header from '../components/Header';
import { Overpass } from '@next/font/google';
import { AuthContextProvider } from '@/context/AuthContext';
import '@/style/globals.css';

const inter = Overpass({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-overpass'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head />
      <body className="font-noto_sans font-medium bg-sky-50">
        <AuthContextProvider>
          <Header />
          <div className="my-20">{children}</div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
