import { type FC, ReactNode } from 'react'

interface ISNSItem {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}

const SNSItem: FC<ISNSItem> = ({ href, target = '_blank', icon, title }) => {
  return (
    <li className="fcc w-[40px] h-[40px] pointer rounded-full">
      <a href={href} target={target} title={title} className="fcc w-[100%] h-[100%]">
        {icon}
      </a>
    </li>
  )
}

export default SNSItem
