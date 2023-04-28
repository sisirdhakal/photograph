import Layout from '@/views/Layout';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'fallback'
});

function MyApp({ Component, pageProps }: AppProps) {

  // console.log(poppins.style)

  return <>
    <div >
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
}

export default MyApp
