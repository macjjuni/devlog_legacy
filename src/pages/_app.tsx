import '@/styles/reset.css'
import '@/styles/notionStyle.css'
import '@/styles/prism.css'
import 'katex/dist/katex.min.css'
import '@/styles/notionStyle.scss'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
