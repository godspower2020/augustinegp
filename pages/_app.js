import React from 'react'
import { Toaster } from "react-hot-toast";
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} height={2} />
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
