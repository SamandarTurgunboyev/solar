import { Header } from '@/components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Lorem</title>
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
