import { ReactNode } from 'react'
import Link from 'next/link'

export const ChipWrap = ({ children }: { children: ReactNode }) => {
  return <ul className="ChipWrap flex justify-start items-center gap-[12px] px-[4px] pt-[4px] pb-[10px] ease">{children}</ul>
}

export const ChipItem = ({ name, icon }: { name: string; icon?: React.ReactNode }) => {
  return (
    <li className="pretendard text-sm md:text-md whitespace-nowrap h-[36px] bg-[#eee] rounded-[8px] shadow-tag">
      <Link href={`/category/${name}`} className="flex justify-center items-center gap-[4px] h-[100%] px-[10px]">
        {icon} {name}
      </Link>
    </li>
  )
}
