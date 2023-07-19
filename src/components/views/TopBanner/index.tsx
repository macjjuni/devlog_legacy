import Image from 'next/image'
import { ChipWrap, ChipItem } from './Chip'
import SearchBar from '../SearchBar'
import Sns from './Sns'
import { IBlogInfo } from '@/types/types'

const TopBanner = ({ data }: { data: IBlogInfo }) => {
  console.log(data)

  return (
    <div className="h-[300px] flex gap-[16px] md:gap-[48px] md:px-xlg py-[48px]">
      <Image src={data.coverURL || '/images/banner-cover.webp'} alt="Top Banner" width="200" height="200" className="top-banner-img w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-[32px]" />
      <div className="flex flex-col gap-[10px] w-[calc(100%-(120px+16px))] md:w-[calc(100%-(200px+48px))] h-[200px] overflow-hidden">
        <div>
          <ChipWrap>
            {data.category?.options.map((cate) => (
              <ChipItem key={cate.id} name={cate.name} />
            ))}
          </ChipWrap>
        </div>
        <div className="flex flex-col justify-between h-[164px] md:h-[164px]">
          <div className="flex flex-col items-start gap-[10px]">
            <h1 className="text-head_sm md:text-head_md">꾸생의 DevLog</h1>
            <h2 className="body md:text-head_sm">{data.description}</h2>
          </div>
          <div className="flex justify-end items-end gap-[12px]">
            <SearchBar />
            <Sns />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopBanner
