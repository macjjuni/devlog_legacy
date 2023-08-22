import { useRef, useEffect, type KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import { throttle } from 'lodash'
import { BiSearchAlt } from 'react-icons/bi'
import { text } from '@/styles/global'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { onSearch, offSearch } from '@/redux/slice/search'

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null)

  const { push, query, pathname } = useRouter()

  const { search } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()

  const searchCheck = () => {
    if (searchRef.current === null || search) return false
    else if (searchRef.current.value.trim() === '') return false
    return true
  }

  // 검색 실행
  const serachStart = (str: string) => {
    if (!searchCheck()) return
    searchRef.current?.blur()
    dispatch(onSearch()) // "검색 중" 이라는 상태 변경
    const searchParam = encodeURIComponent(str.trim().substring(0, 100))
    push(`/search/${searchParam}`)
      .then(() => {
        dispatch(offSearch())
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const onKeyEvent = throttle((e: KeyboardEvent<HTMLInputElement>) => {
    if (!searchCheck() || !searchRef.current) return
    const key = e.key || e.keyCode
    if (key === 'Enter' || key === 13) serachStart(searchRef.current.value) // searchCheck() 함수에서 체크함
  }, 700)

  const onMouseClick = throttle(() => {
    if (searchRef.current === null || !search) return
    if (searchRef.current.value.trim() === '') {
      searchRef.current.focus()
      return
    }
    serachStart(searchRef.current?.value)
  }, 700)

  // 검색 키워드 인풋창에 유지
  useEffect(() => {
    if (searchRef.current === null || query === undefined || typeof query.name !== 'string' || !pathname.includes('search')) return
    searchRef.current.value = query.name
  }, [])

  return (
    <div className="SearchBar w-full md:w-[auto] flex justify-end items-center mt-[10px] md:m-0">
      <div className="SearchWrap relative">
        <BiSearchAlt onClick={onMouseClick} fontSize={24} className={`${text.black} absolute top-[50%] left-[8px] translate-y-[-50%] text-BLG700 cursor-pointer`} />
        <input
          ref={searchRef}
          onKeyDown={onKeyEvent}
          type="text"
          maxLength={100}
          className={`${text.black} text-md py-[8px] pl-[36px] pr-[12px] outline-none bg-BLG100 dark:bg-BLG800 w-[128px] focus:w-[220px] ease rounded-full basic`}
        />
      </div>
    </div>
  )
}

export default SearchBar
