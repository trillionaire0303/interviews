import Head from "next/head";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>면접 리스트</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
