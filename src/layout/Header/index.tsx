import Link from 'next/link'
import { pages } from '@/router'
import { text } from '@/styles/global'
import ToggleTheme from '@/components/views/ToggleTheme'

const Logo = process.env.NEXT_PUBLIC_LOGO_TITLE || 'kku'

const Header = () => {
  return (
    <header className="relative fc justify-between h-header">
      <Link href="/">
        <a className={`${text.black} Logo after:bg-red`}>{Logo}</a>
      </Link>
      <ul className="flex align-center justify-end md:gap-8 gap-4">
        {pages.map((page) => (
          <li key={page.id} className={`${text.black} md:text-head_sm text-xl fwb italic fcc`}>
            <Link href={page.path} className="p-sm">
              {page.title}
            </Link>
          </li>
        ))}
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </header>
  )
}

export default Header
