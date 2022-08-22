/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel="stylesheet" href="../styles/globals.css" />
        <link rel="stylesheet" href='../styles/css/animate.min.css' />
        <link rel="stylesheet" href='../styles/css/bootstrap.min.css' />
        <link rel="stylesheet" href='../styles/css/responsive.css' />
        <link rel="stylesheet" href='../styles/css/style.css' />
        <link rel="stylesheet" href='../styles/css/zimed-icon.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}