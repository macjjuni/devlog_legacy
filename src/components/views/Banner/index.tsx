import Image from 'next/image'
import type { IBlogData } from '@/types/types'
import { text } from '@/styles/global'
import SNSList from '../SNSList'

const Banner = ({ data }: { data: IBlogData }) => {
  return (
    <div className="Banner-wrap">
      <div className="Banner-top-wrap relative w-full md:h-[300px] h-[200px] round-[3px] overflow-hidden z-[-1] select-none">
        <Image src={data.coverURL} className="w-full h-full top-[100%] object-cover" alt="kku.dev blog top banner image" width={1200} height={700} placeholder="empty" quality={80} priority />
      </div>
      <div className="flex justify-between items-center flex-col gap-[8px] py-[24px]">
        <h1 className={`${text.light} flex justify-between items-center text-head_lg fwb w-full`}>
          <div className="cursor-pointer ease hover:text-primary">
            {data.icon} {data.title}
          </div>
          <SNSList />
        </h1>
        <h2 className={`${text.normal} flex justify-start items-start text-lg pl-2 w-full`}>{data.description}</h2>
      </div>
    </div>
  )
}

export default Banner
