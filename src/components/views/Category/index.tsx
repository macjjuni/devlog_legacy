import Link from 'next/link'
import type { SelectPropertyResponse } from '@/notion/types'
import { COLOR_TABLE } from '@/styles/notion.style'

interface IBlogCategory {
  postCount: number
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ postCount, category }: IBlogCategory) => {
  console.log(category)

  return (
    <aside>
      <ul className="flex justify-start items-center gap-4 h-[80px] overflow-auto">
        <li className="text-BLG800 TagItem ease" style={{ borderColor: COLOR_TABLE.default, background: COLOR_TABLE.default }}>
          <Link href="/devlog">
            <a>전체 글</a>
          </Link>
        </li>
        {category?.map((item) => (
          <li key={item.id} className="text-BLG800 TagItem ease" style={{ borderColor: COLOR_TABLE[item.color], background: COLOR_TABLE[item.color] }}>
            <Link href={`/category/${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Category
