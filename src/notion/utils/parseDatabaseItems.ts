import { getDatabaseItems } from '../notion'
import { IPosts } from '@/types/types'

const siteURL = process.env.SITE_URL || 'http://kku.dev'
const defaultThumb = `${siteURL}/image/post-cover.webp`

// 노션 API로 받은 데이터 가공
export const parseDatabaseItems = (databaseItems: Awaited<ReturnType<typeof getDatabaseItems>>) =>
  databaseItems.reduce<IPosts[]>((acc, item) => {
    if (!('properties' in item)) return acc

    const { id } = item
    const { 카테고리, 작성일, 이름, 태그 } = item.properties

    // 블로그 목록 데이터 가공
    const title = 이름?.type === 'title' ? 이름.title[0].plain_text : ''
    const cover = defaultThumb
    const published = 작성일?.type === 'date' ? (작성일.date?.start ? 작성일.date.start : '') : '' || ''
    const category = 카테고리?.type === 'select' ? 카테고리?.select : null
    const tags = 태그?.type === 'multi_select' ? 태그.multi_select : []

    acc.push({ id, cover, title, published, category, tags })
    return acc
  }, [])
