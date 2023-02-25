import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { defaultMapImageUrl, NotionRenderer } from 'react-notion-x'
import type { ExtendedRecordMap } from 'notion-types'
import { useAppSelector } from '@/redux/hook'
import { dark } from '@/redux/slice/theme'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
  ssr: false,
})
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
})

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap
}

const NotionRender = ({ recordMap }: NotionPageRendererProps) => {
  const { theme } = useAppSelector((state) => state.theme)

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        darkMode={theme === dark}
        showTableOfContents
        disableHeader
        pageCover={<></>}
        previewImages={!!recordMap?.signed_urls[0]}
        minTableOfContentsItems={1}
        mapImageUrl={(url, block) => {
          return defaultMapImageUrl(url, block) ?? url
        }}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Pdf,
          Modal,
        }}
      />
    </>
  )
}

export default NotionRender
