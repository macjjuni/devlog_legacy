import { useRef, useEffect, type KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import { throttle } from 'lodash'
import { BiSearchAlt } from 'react-icons/bi'
import { text } from '@/styles/global'

const SearchBar = () => {
  const isEvent = useRef<boolean>(true)
  const searchRef = useRef<HTMLInputElement>(null)

  const { push, query, pathname } = useRouter()

  // 검색 실행
  const onSearch = (str: string) => {
    if (isEvent.current === false) return
    const searchParam = encodeURIComponent(str.trim().substring(0, 100))
    push(`/search/${searchParam}`).catch((e) => {
      console.error(e)
    })
  }

  const onKeyEvent = throttle((e: KeyboardEvent<HTMLInputElement>) => {
    if (searchRef.current === null) return
    if (searchRef.current.value.trim() === '') return
    const key = e.key || e.keyCode
    if (key === 'Enter' || key === 13) onSearch(searchRef.current?.value)
  }, 700)

  const onMouseClick = throttle(() => {
    if (searchRef.current === null) return
    if (searchRef.current.value.trim() === '') return
    onSearch(searchRef.current?.value)
  }, 700)

  // 검색 키워드 인풋창에 유지
  useEffect(() => {
    if (searchRef.current === null || query === undefined || typeof query.name !== 'string' || !pathname.includes('search')) return

    searchRef.current.value = query.name
  }, [])

  return (
    <div className="SearchBar w-full md:w-[auto] flex justify-end items-center py-[4px] mt-[10px] md:m-0">
      <div className="SearchWrap relative">
        <BiSearchAlt onClick={onMouseClick} fontSize={24} className={`${text.black} absolute top-[50%] left-[4px] translate-y-[-50%] text-BLG700 cursor-pointer`} />
        <input
          ref={searchRef}
          onKeyDown={onKeyEvent}
          type="text"
          maxLength={100}
          className={`${text.black} text-md py-[5px] pl-[32px] pr-[12px] outline-none bg-BLG200 dark:bg-BLG700 w-[128px] focus:w-[180px] ease rounded-full`}
        />
      </div>
    </div>
  )
}

export default SearchBar
