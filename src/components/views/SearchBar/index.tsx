import { BiSearchAlt } from 'react-icons/bi'
import { text } from '@/styles/global'

const SearchBar = () => {
  return (
    <div className="SearchBar flex justify-end items-center py-[4px] mt-[10px] md:m-0">
      <div className="SearchWrap relative">
        <BiSearchAlt fontSize={24} className={`${text.black} absolute top-[50%] left-[4px] translate-y-[-50%]`} />
        <input type="text" className={`${text.black} text-body py-[4px] pl-[30px] outline-none bg-BLG200 dark:bg-BLG700 w-[128px] focus:w-[180px] ease rounded-full`} />
      </div>
    </div>
  )
}

export default SearchBar
