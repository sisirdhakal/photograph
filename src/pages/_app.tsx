import Layout from '@/views/Layout';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display:'fallback'
});

function MyApp({ Component, pageProps }: AppProps) {

  // console.log(poppins.style)

  return <>
    <div >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
}

export default MyApp
