import Link from 'next/link'
import { pages } from '@/router'
import { text } from '@/styles/global'
import * as Theme from '@/utils/colorMode'

const Logo = process.env.NEXT_PUBLIC_LOGO_TITLE || 'kku'

const Header = () => {
  return (
    <header className="relative fc justify-between h-header">
      <Link href="/" className={`${text.black} Logo after:bg-red`}>
        {Logo}
      </Link>
      <ul className="flex align-center justify-end gap-[2rem]">
        {pages.map((page) => (
          <li key={page.id} className={`${text.black}text-head_sm fwb italic`}>
            <Link href={page.path}>{page.title}</Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              Theme.toggleColorMode()
            }}
          >
            Toggle
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
