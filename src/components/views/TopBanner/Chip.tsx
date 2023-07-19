import { ReactNode } from 'react'
import Link from 'next/link'

export const ChipWrap = ({ children }: { children: ReactNode }) => {
  return <ul className="ChipWrap flex justify-start items-center gap-[12px] ease">{children}</ul>
}

export const ChipItem = ({ name }: { name: string }) => {
  return (
    <li className="flex items-center gap-[4px] basic text-[16px] h-[36px] px-[12px] bg-[#eee] rounded-[8px]">
      <Link href={`/category/${name}`}>{name}</Link>
    </li>
  )
}
