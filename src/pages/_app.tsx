import 'katex/dist/katex.min.css'
import '@/styles/notionStyle.scss'
import '@/styles/notion.default.css'
import '@/styles/prism.css'
import '@/styles/globals.css'
import '@/styles/nprogress.css'
import 'react-toastify/dist/ReactToastify.min.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from '@/redux/store'
import GAScript from '@/components/common/GAScript'
import NaverWebMaster from '@/components/common/NaverWebMaster'
import WithNProgress from '@/hoc/NProgress'
import Layout from '@/layout'
import InitialTheme from '@/components/common/InitialTheme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        {/* 구글 애널리틱스 */}
        <GAScript />
        {/* 네이버 웹마스터 */}
        <NaverWebMaster />
        {/* 컬러모드 초기화 */}
        <InitialTheme />
        <WithNProgress>
          <ToastContainer />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithNProgress>
      </Provider>
    </>
  )
}

export default App
