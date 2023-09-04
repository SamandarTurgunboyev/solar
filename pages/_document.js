import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <meta
          name="keywords"
          content="sun, panel, sun panel, my sun"
        ></meta>
        <meta
          name="description"
          content="My Sun quyosh panellari bilan uyingizni yoriting"
        ></meta>

        <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/180.png' />
        <link rel='icon' sizes='32x32' type='image/png' href='/images/icons/32.png' />
        <link rel='icon' sizes='16x16' type='image/png' href='/images/icons/16.png' />
        <link rel='icon' sizes='192x192' type='image/png' href='/images/icons/192.png' />

        <meta property='og:image' content='/images/icons/180.png'/>
        <meta property='og:image:width' content='600'/>
        <meta property='og:image:height' content='600'/>

        <meta
        name="description"
        content='My Sun quyosh panellari bilan uyingizni yoriting'
        />
        <meta name="author" content='...'/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
