import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <Head> 
        <title> Derek Daquel | Personal website </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => { window.scrollTo(0, 0)}}
      > 
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
