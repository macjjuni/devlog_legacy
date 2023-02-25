import Link from 'next/link'
import PageHead from '@/components/common/PageHead'
import { text } from '@/styles/global'

const msg = '404 Not Found'

const Error = () => {
  return (
    <>
      <PageHead subTitle={msg} />

      <section className="flex justify-start w-full h-main flex-col md:flex-row">
        <div className="w-full h-[400px]" />
        <div className="w-full flex flex-col justify-start items-center gap-4 md:gap-10 md:justify-center">
          <h1 className={`${text.black} text-head_lg fwb`}>{msg}</h1>
          <Link href="/devlog">
            <a className={`${text.normal} text-lg px-[10px] py-[4px] fwb border border-[${text.normal}]`}>Go DevLog</a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
