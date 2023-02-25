import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillGridFill } from 'react-icons/bs'
import type { SelectPropertyResponse } from '@/notion/types'
import { text } from '@/styles/global'
import { COLOR_TABLE } from '@/styles/notion.style'

interface IBlogCategory {
  postCount: number
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ postCount, category }: IBlogCategory) => {
  const { pathname, query } = useRouter()

  return (
    <aside>
      <ul className="flex justify-start items-center overflow-auto h-[40px] border-b border-b-BLG300 dark:border-b-BLG700 ease">
        <li className={`${text.light} ${pathname === '/devlog' ? 'TagActive' : ''} TagItem text-md after:bg-BLG800 dark:after:bg-BLG200`}>
          <Link href="/devlog">
            <a className="fcc gap-1">
              <BsFillGridFill />
              전체 글{pathname === '/devlog' && `(${postCount})`}
            </a>
          </Link>
        </li>
        {category?.map((item) => (
          <li key={item.id} className={`${text.light} ${query.id === item.name ? 'TagActive' : ''} text-BLG800 TagItem text-md after:bg-BLG800 dark:after:bg-BLG200`}>
            <Link href={`/category/${item.name}`}>
              <a>
                {item.name}
                {query.id === item.name && `(${postCount})`}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
