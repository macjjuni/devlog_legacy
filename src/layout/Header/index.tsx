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
      <ul className="flex align-center justify-end gap-[2rem]">
        {pages.map((page) => (
          <li key={page.id} className={`${text.black} text-head_sm fwb italic`}>
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
