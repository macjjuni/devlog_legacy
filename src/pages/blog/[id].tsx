import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import type { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { getHeadDescription } from '@/notion/utils/getHeadDescription'
import PageHead from '@/components/common/PageHead'
import NotionRender from '@/components/common/NotionRender'
import Comment from '@/components/views/Comment'
import NotionSkeleton from '@/components/views/NotionSkeleton'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { getPageContent } from '@/notion/notion'

interface IDetailsPage {
  recordMap: ExtendedRecordMap
}

const DetailsPage = ({ recordMap }: IDetailsPage) => {
  const { isFallback } = useRouter()
  const pageTitle = recordMap ? getPageTitle(recordMap) : ''
  const description = recordMap ? getHeadDescription(recordMap) : ''

  if (isFallback) return <NotionSkeleton />

  return (
    <>
      <PageHead subTitle={pageTitle} description={description === '' ? pageTitle : description} />
      <NotionRender recordMap={recordMap} />
      <Comment />
    </>
  )
}

export const getStaticProps: GetStaticProps<IDetailsPage> = async ({ params }) => {
  // export const getServerSideProps: GetServerSideProps<IDetailsPage> = async ({ params }) => {
  const id = params?.id
  try {
    if (!id) throw Error('id is not defined')
    const recordMap = await getPageContent(id.toString())
    return {
      props: { recordMap },
      revalidate: 1,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!databaseId) throw new Error('DATABASE_ID is not defined')
  const databaseItems = await getCachedDatabaseItems(databaseId)
  const paths = databaseItems.map(({ id }) => ({
    params: { id },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default DetailsPage
