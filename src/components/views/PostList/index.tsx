import Link from 'next/link'
import moment from 'moment'
import { text } from '@/styles/global'
import type { IDevLogData } from '@/notion/types'

interface IPostList {
  data: IDevLogData[]
}

const PostList = ({ data }: IPostList) => {
  return (
    <ul className="flex justify-start flex-col">
      {data.map((post) => (
        <li key={post.id} className="block border-b border-solid border-BG_0 py-xlg px-sm">
          <Link href={`/devlog/${post.id}`}>
            <a className="flex flex-col justify-start w-full">
              <p className="text-sm text-primary fwb">{post.category?.name}</p>
              <h2 className={`text-head_sm ${text.normal} fwb whitespace-nowrap truncate`}>{post.title}</h2>
              <p className="text-sm text-BLG500">{moment(post.published).format('YYYY-MM-DD')}</p>
              <ul className="flex justify-start items-center gap-[1rem] mt-[10px] h-[28px]">
                {post.tags.map((tag) => (
                  <li key={tag.id} className={`text-md ${text.light}`}>
                    #{tag.name}
                  </li>
                ))}
                {post.tags.length === 0 && <li className={`text-md ${text.light}`}>없음</li>}
              </ul>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
