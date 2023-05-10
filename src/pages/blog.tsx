import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { POSTS_PER_PAGE } from '@/notion/config'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { parseDatabaseItems } from '@/notion/utils/parseDatabaseItems'
import { initBlogInfo } from '@/notion/notion'
import SEO from '@/components/common/SEO'
import Banner from '@/components/views/Banner'
import PostList from '@/components/views/PostList'
import Category from '@/components/views/Category'
import Pagination from '@/components/views/Pagination'
import type { IBlogInfo, IPosts } from '@/types/types'

interface IBlog {
  data: IPosts[]
  blogData: IBlogInfo
}

const Blog = ({ data, blogData }: IBlog) => {
  const { query } = useRouter()
  const currentPage = query.page ? parseInt(query.page.toString(), 10) : 1
  const [postData, setPostData] = useState(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  const [postCount] = useState(data.length)

  useEffect(() => {
    setPostData(data.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage))
  }, [currentPage, data])
  return (
    <section className="">
      <SEO subTitle="Blog" />
      <Banner data={blogData} />
      <Category postCount={postCount} category={blogData?.category?.options} />
      <PostList data={postData} />
      <Pagination current={currentPage} total={data.length} />
    </section>
  )
}

export const getStaticProps: GetStaticProps<IBlog> = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    if (!databaseId) throw new Error('DATABASE_ID is not defined')
    const databaseItems = await getCachedDatabaseItems(databaseId)
    const parsedData = parseDatabaseItems(databaseItems)
    const blogData = await initBlogInfo(databaseId)
    return {
      props: {
        data: parsedData,
        blogData,
      },
      revalidate: 60,
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true,
    }
  }
}

export default Blog
