import Link from 'next/link'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { text } from '@/styles/global'
import { PAGINATION_RANGE, POSTS_PER_PAGE } from '@/notion/config'

interface PaginationButtonProps {
  children: React.ReactNode
  disabled?: boolean
  to: number
}
const PaginationButton = ({ children, to, disabled = false }: PaginationButtonProps) => {
  const ableCheck = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) e.preventDefault()
  }
  return (
    <Link href={{ query: { page: to } }} onClick={ableCheck}>
      <button type="button" className={`${text.normal} fcc sm:text-md md:text-lg w-[26px] h-[26px] md:w-[34px] md:h-[34px] p-[4px] ${disabled ? 'cursor-not-allowed	' : ''}`} disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

const iconSize = 28

interface PaginationProps {
  current: number
  total: number
}
const Pagination = ({ current, total }: PaginationProps) => {
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <div className="fcc gap-1 md:gap-2 mt-[20px] py-[12px]">
      <PaginationButton to={current - 1} disabled={current === 1}>
        <MdOutlineKeyboardArrowLeft fontSize={iconSize} />
      </PaginationButton>

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current - index - 1)
        .reverse()
        .map((pageIndex) =>
          pageIndex > 0 ? (
            <PaginationButton key={pageIndex} to={pageIndex}>
              {pageIndex}
            </PaginationButton>
          ) : null
        )}

      <button type="button" className={`active ${text.normal} sm:text-md md:text-lg fcc w-[26px] h-[26px] md:w-[34px] md:h-[34px] p-[4px] rounded-full`}>
        {current}
      </button>

      {Array.from(Array(PAGINATION_RANGE), (_, index) => current + index + 1).map((pageIndex) =>
        pageIndex <= lastPageNumber ? (
          <PaginationButton key={pageIndex} to={pageIndex}>
            {pageIndex}
          </PaginationButton>
        ) : null
      )}

      <PaginationButton to={current + 1} disabled={current === lastPageNumber}>
        <MdOutlineKeyboardArrowRight fontSize={iconSize} />
      </PaginationButton>
    </div>
  )
}

export default Pagination
