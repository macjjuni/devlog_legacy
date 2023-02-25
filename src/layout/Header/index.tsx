import Link from 'next/link'
import { useRouter } from 'next/router'
import { pages } from '@/router'
import { text } from '@/styles/global'
import ToggleTheme from '@/components/views/ToggleTheme'

const Logo = process.env.NEXT_PUBLIC_LOGO_TITLE || 'kku'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <header className="relative fc justify-between h-header">
      <Link href="/">
        <a className={`${text.black} Logo after:bg-primary`}>{Logo}</a>
      </Link>
      <ul className="flex align-center justify-end md:gap-8 gap-4">
        {pages.map((page) => (
          <li key={page.id} className="fcc relative">
            <Link href={page.path}>
              <a
                className={`NavLink ${pathname === page.path ? 'active' : ''} ${page.path !== '/' ? (pathname.includes('devlog') ? 'active' : '') : ''} 
                ${text.black} md:text-head_sm text-xl fwb italic p-sm after:bg-BLG1000 dark:after:bg-BLG0`}
              >
                {page.title}
              </a>
            </Link>
          </li>
        ))}
        <li className="fcc">
          <ToggleTheme />
        </li>
      </ul>
    </header>
  )
}

export default Header
