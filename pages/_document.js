import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>My Sun</title>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <meta
          name="keywords"
          content="sun, panel, sun panel, my sun"
        ></meta>
        <meta
          name="description"
          content="My Sun quyosh panellari bilan uyingizni yoriting"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
