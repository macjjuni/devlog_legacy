import { memo } from 'react'
import Img from '@/components/common/Img'
import type { IBlogInfo } from '@/types/types'
import { text } from '@/styles/global'
import SNSList from '../SNSList'
import SearchBar from '@/components/views/SearchBar'
import { DEFAULT_THUMB_URL } from '@/notion/config'

const Banner = ({ data }: { data: IBlogInfo }) => {
  return (
    <div className="Banner-wrap">
      <div className="Banner-top-image relative  w-full md:h-[300px] h-[auto] rounded-[3px] overflow-hidden z-[-1] select-none">
        <Img
          src={data.coverURL || DEFAULT_THUMB_URL}
          alt="kku.dev Top Banner"
          width={1200}
          height={300}
          className="md:absolute md:top-[50%] md:left-[50%] md:translate-y-[-50%] md:translate-x-[-50%]"
        />
      </div>
      <div className="flex justify-between items-center flex-col gap-[8px] pt-[24px] pb-[8px]">
        <h1 className={`${text.light} flex justify-between items-center text-head_lg font-bold w-full`}>
          <div className="cursor-pointer ease hover:text-primary select-none">
            {data.icon} {data.title}
          </div>
          <SNSList />
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <h2 className={`${text.normal} flex justify-start items-start text-sm md:text-lg px-[2px]`}>{data.description}</h2>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default memo(Banner)
