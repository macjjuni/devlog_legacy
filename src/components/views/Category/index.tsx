import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillGridFill } from 'react-icons/bs'
import type { SelectPropertyResponse } from '@/types/types'
import { text } from '@/styles/global'

interface IBlogCategory {
  postCount: number
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ postCount, category }: IBlogCategory) => {
  const { pathname, query } = useRouter()
  return (
    <aside>
      <ul className="TagWrap flex justify-start items-center border-b border-b-BLG300 dark:border-b-BLG700 ease">
        <li className={`${text.light} ${pathname === '/blog' ? 'TagActive' : ''} TagItem gap-2 text-lg after:bg-BLG800 dark:after:bg-BLG200 hover:bg-BLG200 dark:hover:bg-BLG700`}>
          <BsFillGridFill />
          <Link href="/blog">전체{pathname === '/blog' && `(${postCount})`}</Link>
        </li>
        {category?.map((item) => (
          <li
            key={item.id}
            className={`${text.light} ${query.name === item.name ? 'TagActive' : ''} text-BLG800 TagItem text-lg after:bg-BLG800 dark:after:bg-BLG200 hover:bg-BLG200 dark:hover:bg-BLG700`}
          >
            <Link href={`/category/${item.name}`}>
              {item.name}
              {query.name === item.name && `(${postCount})`}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
