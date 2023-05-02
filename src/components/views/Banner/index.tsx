import { useState, memo } from 'react'
import Image from 'next/image'
import Skeleton from './components/Skeleton'
import type { IBlogInfo } from '@/types/types'
import { text } from '@/styles/global'
import SNSList from '../SNSList'
import SearchBar from '@/components/views/SearchBar'

const Banner = ({ data }: { data: IBlogInfo }) => {
  const [isLoad, setLoad] = useState(false)
  const onLoadImage = () => {
    setLoad(true)
  }
  return (
    <div className="Banner-wrap">
      <div className="Banner-top-wrap relative w-full md:h-[300px] h-[200px] rounded-[3px] overflow-hidden z-[-1] select-none">
        {!isLoad && <Skeleton />}
        <Image src="/images/banner-cover.webp" alt="kku.dev Top Banner" onLoad={onLoadImage} className="absolute top-[50%] translate-y-[-40%] l-[0] w-full h-[auto] " width="1200" height="700" />
      </div>
      <div className="flex justify-between items-center flex-col gap-[8px] pt-[24px] pb-[8px]">
        <h1 className={`${text.light} flex justify-between items-center text-head_lg fwb w-full`}>
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
