import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Cormorant_Upright, Open_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const cormorant = Cormorant_Upright({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const sans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

import Layout from '../components/layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${cormorant.style.fontFamily};
          font-size: 62.5%;
          scroll-behavior: smooth;
        }

        ul,
        li,
        p {
          font-family: ${sans.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
