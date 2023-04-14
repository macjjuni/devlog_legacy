import { ReactNode, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const options = {
  minimum: 0.1,
  speed: 180,
  easing: '',
  trickle: true,
  showSpinner: false,
  template: '<div class="bar" role="bar"></div></div>',
}

NProgress.configure(options)

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

  return <>{children}</>
}

export default WithNProgress
