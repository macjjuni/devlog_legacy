import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { onScroll, offScroll } from '@/redux/slice/scroll'
import { pages } from '@/router'
import { text } from '@/styles/global'
import ToggleTheme from '@/components/views/ToggleTheme'

const Logo = process.env.NEXT_PUBLIC_LOGO_TITLE || 'kku'

const Header = () => {
  const { pathname } = useRouter()
  const dispatch = useAppDispatch()
  const { scroll } = useAppSelector((state) => state.scroll)
  
  // const [bgShadow, setBgShadow] = useState<boolean>(false)
  const obsRef = useRef(null)

  const obsHandler: IntersectionObserverCallback = (entries) => {
    const target = entries[0]
    if (target.isIntersecting) dispatch(offScroll())
    else dispatch(onScroll())
  }

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 })
    if (obsRef.current) observer.observe(obsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ----------------- 옵저버 ----------------- */}
      <div ref={obsRef} className="absolute top-0 left-0 w-0 h-0 bg-black" />
      {/* ----------------- 옵저버 ----------------- */}

      <header className={`${scroll ? 'shadow-header dark:shadow-headerDark' : ''} fixed top-[0] left-[0] w-full backdrop-blur-sm z-[9000] ease`}>
        <div className="fc justify-between max-w-screen-lg w-full h-header mx-[auto] px-lg md:px-xlg">
          <Link href="/" className={`${text.black} Logo basic after:bg-primary select-none`}>
            {Logo}
          </Link>
          <ul className="flex align-center justify-end md:gap-8 gap-4">
            {pages.map((page) => (
              <li key={page.id} className="fcc relative select-none">
                <Link
                  href={page.path}
                  className={`NavLink basic ${pathname === page.path ? 'active' : ''} ${page.path !== '/' ? (pathname.includes('blog') ? 'active' : '') : ''} 
                ${text.black} md:text-head_sm text-xl fwb italic p-sm after:bg-black after:h-[2px] md:after:h-[3px] dark:after:bg-BLG0`}
                >
                  {page.title}
                </Link>
              </li>
            ))}
            <li className="fcc">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
