import Head from "next/head";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8GTFLKEPT0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-8GTFLKEPT0');
        </script>

        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>면접 리스트</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
