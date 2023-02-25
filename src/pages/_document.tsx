import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Favicon from '@/components/common/Favicon'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
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
