import React from 'react'
import { Toaster } from "react-hot-toast";
import Script from 'next/script'
import NextNProgress from 'nextjs-progressbar';
 
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics tag (gtag.js) */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
      <NextNProgress options={{ showSpinner: false }} height={2} />
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
