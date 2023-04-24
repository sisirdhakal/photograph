import '@/styles/globals.css'
import Layout from '@/views/Layout'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});


export default function App({ Component, pageProps }: AppProps) {
  <main className={poppins.className}>
    <Layout>
      <Component {...pageProps} />
      {/* <ToastContainer /> */}
    </Layout>

  </main>
}
