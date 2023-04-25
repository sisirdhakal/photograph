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
        {/* <ToastContainer /> */}
      </Layout>
    </div>
  </>
}

export default MyApp



// import '@/styles/globals.css'
// import Layout from '@/views/Layout'
// import type { AppProps } from 'next/app'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   weight: ['200', '300', '400', '500', '600', '700'],
//   subsets: ['latin'],
// });


// export default function App({ Component, pageProps }: AppProps) {
//   < main className={poppins.className} >
    // <Layout>
    //   <Component {...pageProps} />
    //   {/* <ToastContainer /> */}
    // </Layout>
//   </main >
// }
