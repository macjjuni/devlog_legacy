import Link from 'next/link'
import moment from 'moment'
import { text } from '@/styles/global'
import NoPost from '@/components/views/NoPost'
import NewIcon from '../NewIcon'
import type { IPosts } from '@/types/types'

interface IPostList {
  data: IPosts[]
}

const recentDay = 3 // 최근글 계산 일수

const PostList = ({ data }: IPostList) => {
  const isNewPost = (published: string): boolean => {
    // 최근 포스팅 계산
    const today = moment().format('YYYY-MM-DD')
    const isRecent = moment(today).diff(published, 'days') < recentDay
    return isRecent
  }

  return (
    <ul className="flex justify-start flex-col mt-[6px] md:mt-[18px]">
      {data.map((post) => (
        <li
          key={post.id}
          className="relative block py-xlg after:absolute after:bottom-[0] after:left-[50%] 
          after:translate-x-[-50%] after:bg-BG_0 after:w-[100%] after:h-[1px] ease"
        >
          <Link href={`/blog/${post.id}`} className="flex flex-col justify-start w-full">
            {/* 카테고리 */}
            <p className="text-md text-primary font-bold">{post.category?.name}</p>
            {/* 제목 */}
            <h2 className={`text-xlg md:text-head_sm ${text.normal} font-bold whitespace-nowrap truncate`}>{post.title}</h2>
            <div className="flex justify-start items-center gap-2">
              {/* 날짜 */}
              <span className={`text-md ${text.normal}`}>{post.published}</span>
              {/* 최근 포스팅 아이콘 */}
              {isNewPost(post.published) && <NewIcon />}
            </div>
            {/* 태그 */}
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
      {/* 글 없을 때 */}
      {data.length === 0 && <NoPost />}
    </ul>
  )
}

export default PostList
