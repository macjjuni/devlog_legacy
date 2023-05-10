import Head from 'next/head'

const contentId = process.env.NEXT_PUBLIC_NAVER_CONTENT

const NaverWebMaster = () => {
  if (!contentId) return null
  return (
    <Head>
      <meta name="naver-site-verification" content={contentId} />
    </Head>
  )
}

export default NaverWebMaster
