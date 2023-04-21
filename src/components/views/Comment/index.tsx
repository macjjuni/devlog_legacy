import { useEffect, useRef } from 'react'

// utterances 사용
// 개발 모드때 2개 씩 렌더링 되는데, 관련 함수 만들어서 추가할 예정이고 다크모드도 적용해야함

const Comment = () => {
  const commentRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.async = true
    scriptEl.crossOrigin = 'anonymous'
    scriptEl.setAttribute('repo', 'macjjuni/kku.dev-comment')
    scriptEl.setAttribute('issue-term', 'url')
    // scriptEl.setAttribute('theme', `github-${commentsTheme}`);
    scriptEl.setAttribute('label', '💬 Discussion')

    commentRef.current?.appendChild(scriptEl)
  }, [])
  //

  return (
    <>
      <section className="flex justify-start items-center flex-row-reverse" ref={commentRef}>
        <div className="block hidden lg:block max-w-[280px] min-w-[280px] w-[280px]" />
      </section>
    </>
  )
}
export default Comment
