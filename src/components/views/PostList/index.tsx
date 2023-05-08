import Link from 'next/link'
import { text } from '@/styles/global'
import NoPost from '@/components/views/NoPost'
import type { IPosts } from '@/types/types'

interface IPostList {
  data: IPosts[]
}

const PostList = ({ data }: IPostList) => {
  return (
    <ul className="flex justify-start flex-col">
      {data.map((post) => (
        <li key={post.id} className="block border-b border-solid border-BG_0 py-xlg md:px-sm">
          <Link href={`/blog/${post.id}`} className="flex flex-col justify-start w-full">
            <p className="text-md text-primary fwb">{post.category?.name}</p>
            <h2 className={`text-xlg md:text-head_sm ${text.normal} fwb whitespace-nowrap truncate`}>{post.title}</h2>
            <p className={`text-md ${text.normal}`}>{post.published.substring(0, 10)}</p>
            <ul className="flex justify-start items-center gap-[1rem] mt-[10px] h-[28px]">
              {post.tags.map((tag) => (
                <li key={tag.id} className={`text-md ${text.light}`}>
                  #{tag.name}
                </li>
              ))}
              {post.tags.length === 0 && <li className={`text-md ${text.light}`}>없음</li>}
            </ul>
          </Link>
        </li>
      ))}
      {data.length === 0 && <NoPost />}
    </ul>
  )
}

export default PostList
