import Link from 'next/link'
import PageHead from '@/components/common/PageHead'
import { text } from '@/styles/global'

const msg = '404 Not Found'

const Error = () => {
  return (
    <>
      <PageHead subTitle={msg} />
      <section className="flex flex-col md:flex-row justify-start md:justify-between items-center h-main">
        <div className="w-full h-[400px] md:h-full" />
        <div className="w-full flex items-center flex-col sm:justify-start">
          <h2 className={`${text.black} text-head_lg fwb`}>{msg}</h2>
          <Link href="/blog" className={`${text.light} text-lg fcc bg-BLG200 dark:bg-BLG700 rounded-md px-[12px] py-[6px] mt-[30px]`}>
            Go Blog
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
