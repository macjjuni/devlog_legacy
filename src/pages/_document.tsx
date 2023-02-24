import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Favicon from '@/components/common/Favicon'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Favicon />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
