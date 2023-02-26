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
        <li className={`${text.light} ${pathname === '/devlog' ? 'TagActive' : ''} TagItem text-md after:bg-BLG800 dark:after:bg-BLG200 hover:bg-BLG200 dark:hover:bg-BLG700`}>
          <Link href="/devlog" className="fcc gap-1">
            <BsFillGridFill />
            전체 글{pathname === '/devlog' && `(${postCount})`}
          </Link>
        </li>
        {category?.map((item) => (
          <li
            key={item.id}
            className={`${text.light} ${query.id === item.name ? 'TagActive' : ''} text-BLG800 TagItem text-md after:bg-BLG800 dark:after:bg-BLG200 hover:bg-BLG200 dark:hover:bg-BLG700`}
          >
            <Link href={`/category/${item.name}`}>
              {item.name}
              {query.id === item.name && `(${postCount})`}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
