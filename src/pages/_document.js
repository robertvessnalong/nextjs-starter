import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel='stylesheet'/>
      <Script src='https://use.fontawesome.com/1c75192f43.js' strategy='beforeInteractive'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
