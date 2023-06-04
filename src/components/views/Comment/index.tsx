import { useEffect, useRef } from 'react'
import { useAppSelector } from '@/redux/hook'
import { appendUtter, isContainUtter, toggleTheme, removeLazy } from '@/utils/utterances'

/* ----------------- utterances ----------------- */
const config = { childList: true } // Observer 설정

const Comment = () => {
  const { theme } = useAppSelector((state) => state.theme)
  const commentRef = useRef<HTMLElement | null>(null)

  // Observer Handler
  const observerHandler = () => {
    removeLazy()
  }

  useEffect(() => {
    const observer = new MutationObserver(observerHandler) // Observer 생성
    if (commentRef.current) observer.observe(commentRef.current, config) // Observer 시작
    return () => {
      observer.disconnect() // Observer 종료
    }
  }, [])

  useEffect(() => {
    const commentDom = commentRef.current
    if (!commentDom || theme === null) return

    const isContain = isContainUtter(commentDom)
    if (isContain) {
      toggleTheme(theme) // 렌더링 된 경우 테마 변경 됐을 때 로직 실행!
    } else {
      appendUtter(commentDom, theme) // 렌더링 안 됐으면 스크립트 삽입 로직 실행!
    }
  }, [theme])

  return (
    <section ref={commentRef} className="flex justify-start items-center flex-row-reverse h-[270px] mt-[15px] md:mt-[30px]">
      <div className="hidden lg:block max-w-[280px] min-w-[280px] w-[280px]" />
    </section>
  )
}
export default Comment
