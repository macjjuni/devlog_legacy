import { useEffect, useRef } from 'react'
import { useAppSelector } from '@/redux/hook'
import { appendUtter, isContainUtter, removeUtter } from '@/utils/utterances'
// utterances 사용

const Comment = () => {
  const { theme } = useAppSelector((state) => state.theme)
  const commentRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const commentDom = commentRef.current
    if (!commentDom || theme === null) return

    const isContain = isContainUtter(commentDom)
    if (isContain) {
      // 렌더링 된 경우
      removeUtter(commentDom)
      appendUtter(commentDom, theme)
    } else {
      // 아직 렌더링 안 된 경우
      appendUtter(commentDom, theme)
    }
  }, [theme])
  //

  return (
    <>
      <section id="kku-detail-comment" className="flex justify-start items-center flex-row-reverse" ref={commentRef}>
        <div className="block hidden lg:block max-w-[280px] min-w-[280px] w-[280px]" />
      </section>
    </>
  )
}
export default Comment
