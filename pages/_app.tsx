import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Callum Byrne</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlczh9yrb/image/upload/v1653028075/Portfolio/portfolio-screenshot-resized_w5oivq.png"
        />

        <meta property="og:title" content="Callum Byrne" />

        <meta property="og:description" content="Callum Byrne's Portfolio" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
