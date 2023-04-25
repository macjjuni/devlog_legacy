import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { useAppSelector } from '@/redux/hook'
import { dark } from '@/redux/slice/theme'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap
}

const NotionRender = ({ recordMap }: NotionPageRendererProps) => {
  const commentBtn = useRef(null)
  const { theme } = useAppSelector((state) => state.theme)

  useEffect(() => {
    const tocDom = document.getElementsByClassName('notion-aside-table-of-contents-header')[0] as HTMLElement
    if (tocDom) tocDom.textContent = '📋 목차'
  }, [])

  // iframe lazy loading 때문에 지연 후 스크롤 이동
  const onComment = () => {
    if (commentBtn.current === null) return
    const target = commentBtn.current as HTMLAnchorElement
    const top = document.body.scrollHeight - target.getBoundingClientRect().top
    setTimeout(() => {
      window.scroll({ top, behavior: 'smooth' })
    }, 1000)
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage
      darkMode={theme === dark}
      disableHeader
      minTableOfContentsItems={1}
      pageCover={<></>}
      showTableOfContents
      previewImages={!!recordMap?.preview_images}
      // TOC에 댓글 추가
      pageAside={
        <div className="px-[8px] w-full">
          <a href="#kku-detail-comment" ref={commentBtn} onClick={onComment} className="notion-table-of-contents-item notion-table-of-contents-item-indent-level-0 p-[8px]">
            <span className="notion-table-of-contents-item-body">💬 댓글</span>
          </a>
        </div>
      }
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        propertyDateValue: (dateProperty) => dateProperty.data[0][1][0][1].start_date,
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
      }}
    />
  )
}

export default NotionRender
