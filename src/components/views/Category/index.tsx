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
        <li className={`${text.light} ${pathname === '/blog' ? 'TagActive' : ''} TagItem basic text-lg rounded-sm after:bg-BLG800 dark:after:bg-BLG300 hover:bg-BLG300 dark:hover:bg-BLG700`}>
          <Link href="/blog" className="fcc gap-2">
            <BsFillGridFill />
            <span>All{pathname === '/blog' && `(${postCount})`}</span>
          </Link>
        </li>
        {category?.map((item) => (
          <li
            key={item.id}
            className={`${text.light} ${
              query.name === item.name ? 'TagActive' : ''
            } TagItem basic text-BLG800 rounded-sm text-lg after:bg-BLG800 dark:after:bg-BLG300 hover:bg-BLG200 dark:hover:bg-BLG700`}
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
