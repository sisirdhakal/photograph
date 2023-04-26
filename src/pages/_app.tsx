import Layout from '@/views/Layout';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <div className={poppins.className} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
}

export default MyApp
