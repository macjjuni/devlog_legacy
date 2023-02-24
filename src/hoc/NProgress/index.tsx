import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const options = {
  speed: 200,
  height: '4px',
  showSpinner: false,
  color: '#33A1FF',
}

NProgress.configure({ speed: options.speed, showSpinner: options.showSpinner })

const WithNProgress = ({ children }: { children: ReactNode }) => {
  const { events } = useRouter()

  const handleStart = useCallback(() => {
    NProgress.start()
  }, [])
  const handleStop = useCallback(() => {
    NProgress.done()
  }, [])

  useEffect(() => {
    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleStop)
    events.on('routeChangeError', handleStop)
    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleStop)
      events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <>
      <style jsx global>
        {`
          #nprogress .bar {
            height: ${options.height};
            background: ${options.color};
          }
        `}
      </style>
      {children}
    </>
  )
}

export default WithNProgress
