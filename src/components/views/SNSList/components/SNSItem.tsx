import { type FC, ReactNode } from 'react'

interface ISNSItem {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
  className?: string
}

const SNSItem: FC<ISNSItem> = ({ href, target = '_blank', icon, title, className = '' }) => {
  return (
    <li className={`${className} SNSLink relative fcc w-[40px] h-[40px] pointer rounded-full transition-transform ease duration-500 hover:rotate-[12deg]`}>
      <a href={href} target={target} title={title} className="fcc w-full h-full">
        {icon}
      </a>
    </li>
  )
}

export default SNSItem
