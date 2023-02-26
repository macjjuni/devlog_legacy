import dynamic from 'next/dynamic'
import { ExtendedRecordMap } from 'notion-types'
import { defaultMapImageUrl, NotionRenderer } from 'react-notion-x'
import { useAppSelector } from '@/redux/hook'
import { dark } from '@/redux/slice/theme'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
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
    <NotionRenderer
      recordMap={recordMap}
      fullPage
      darkMode={theme === dark}
      disableHeader
      pageCover={<></>}
      showTableOfContents
      previewImages={!!recordMap?.preview_images}
      mapImageUrl={(url, block) => defaultMapImageUrl(url, block) ?? url}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        propertyDateValue: (dateProperty) => dateProperty.data[0][1][0][1].start_date,
        Code,
        Collection,
        Equation,
        Pdf,
        Modal,
      }}
    />
  )
}

export default NotionRender
