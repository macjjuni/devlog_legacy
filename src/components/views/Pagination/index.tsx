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
  return (
    <Link href={{ query: { page: to } }}>
      <button type="button" className={`${text.normal} ${disabled ? 'cursor-not-allowed	' : ''}`} disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

interface PaginationProps {
  current: number
  total: number
}
const Pagination = ({ current, total }: PaginationProps) => {
  const lastPageNumber = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <div className="fcc g-4 mt-[20px] py-[20px]">
      <PaginationButton to={current - 1} disabled={current === 1}>
        <MdOutlineKeyboardArrowLeft fontSize={24} />
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

      <button type="button" className={`active ${text.normal} fcc w-[34px] h-[34px] p-[4px] rounded-full`}>
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
        <MdOutlineKeyboardArrowRight fontSize={24} />
      </PaginationButton>
    </div>
  )
}

export default Pagination
