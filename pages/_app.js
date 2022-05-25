import React, { useEffect } from 'react';
import Head from "next/head";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [ router.events ])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description="모든 직업의 면접 리스트를 무료로 확인하세요!" />
        <title>면접 질문 리스트</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
