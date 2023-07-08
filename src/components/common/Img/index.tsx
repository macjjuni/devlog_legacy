import { useState } from 'react'
import Image from 'next/image'

interface INextImage {
  src: string
  className?: string
  width: number
  height: number
  alt: string
  fill?: boolean
  sizes?: string // sizes="(max-width: 768px) 100vw"
  loading?: 'eager' | 'lazy'
  quality?: number
  priority?: boolean
}

// 스켈레톤 컴포넌트
const Seleton = () => {
  return <div className="Skeleton relative animate-pulse w-full h-full bg-BLG300 dark:bg-BLG700" />
}

const Img = ({ src, className, fill = false, width, height, alt, sizes, loading = 'eager', quality = 100, priority = true }: INextImage) => {
  const imgWidth = !fill ? width : undefined
  const imgHeight = !fill ? height : undefined

  const [isLoad, setLoad] = useState(false)
  const onLoad = () => {
    setLoad(true)
  }

  return (
    <div className={`next-image-wrapper min-w-[${width}px] min-h-[${height}px]`}>
      {!isLoad && <Seleton />}
      <Image
        src={src}
        className={`next-image ${className || ''}`}
        fill={fill}
        width={imgWidth}
        height={imgHeight}
        alt={alt}
        sizes={sizes}
        loading={loading}
        quality={quality}
        priority={priority}
        onLoadingComplete={onLoad}
      />
    </div>
  )
}

export default Img
