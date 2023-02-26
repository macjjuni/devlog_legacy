import Link from 'next/link'
import PageHead from '@/components/common/PageHead'
import { text } from '@/styles/global'

const msg = '404 Not Found'

const Error = () => {
  return (
    <>
      <PageHead subTitle={msg} />

      <section className="flex justify-between items-center  h-main">
        <div className="w-full" />
        <div className="w-full flex items-center flex-col">
          <h2 className={`${text.black} text-head_lg fwb`}>{msg}</h2>
          <Link href="/devlog" className={`${text.light} text-lg fcc bg-BLG300  rounded-md px-[12px] py-[6px] mt-[30px]`}>
            Go DevLog
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
