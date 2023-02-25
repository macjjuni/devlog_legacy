import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import type { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { getHeadDescription } from '@/notion/utils/getHeadDescription'
import PageHead from '@/components/common/PageHead'
// import Giscus from '@giscus/react'
import NotionRender from '@/components/common/NotionRenderer'
import { getCachedDatabaseItems } from '@/notion/utils/getCachedDatabaseItems'
import { getPageContent } from '@/notion/notion'

interface IDetailsPage {
  recordMap: ExtendedRecordMap
}

const DetailsPage = ({ recordMap }: IDetailsPage) => {
  const { isFallback } = useRouter()
  const pageTitle = recordMap ? getPageTitle(recordMap) : ''
  const description = recordMap ? getHeadDescription(recordMap) : ''

  if (isFallback) return <>Loading...</>

  return (
    <>
      <PageHead subTitle={pageTitle} description={description === '' ? pageTitle : description} />
      <NotionRender recordMap={recordMap} />
      {/* <div className="max-w-4xl mx-auto my-8">
        <Giscus
          id="comments"
          term="blog"
          repo="macjjuni/portfolio"
          repoId="R_kgDOITdSEg"
          category="General"
          categoryId="DIC_kwDOITdSEs4CS0Sk"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="ko"
        />
      </div> */}
    </>
  )
}

export const getStaticProps: GetStaticProps<IDetailsPage> = async ({ params }) => {
  const id = params?.id
  try {
    if (!id) throw Error('id is not defined')
    const recordMap = await getPageContent(id.toString())

    return {
      props: { recordMap },
      revalidate: 60 * 5,
    }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASEID

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
