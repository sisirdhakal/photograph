import Layout from '@/views/Layout';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'fallback'
});

function MyApp({ Component, pageProps }: AppProps) {


  return <>
    <div >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
}

export default MyApp
