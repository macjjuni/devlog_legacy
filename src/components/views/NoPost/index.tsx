import { useRouter } from 'next/router'
import { text } from '@/styles/global'

const NoPost = () => {
  const { pathname, query } = useRouter()
  const searchText = () => {
    if (typeof query.name === 'string') return query.name
    return ''
  }
  return <li className={`${text.light} fcc h-[200px]`}>{pathname.includes('search') ? `"${searchText()}" 검색 결과가 없습니다.` : '현재 글이 없습니다.'}</li>
}

export default NoPost
