import { useLayoutEffect, useRef } from 'react'

const Comment = () => {
  const commentRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.async = true
    scriptEl.crossOrigin = 'anonymous'
    scriptEl.setAttribute('repo', 'macjjuni/kku.dev-comment')
    scriptEl.setAttribute('issue-term', 'pathname')
    // scriptEl.setAttribute('theme', `github-${commentsTheme}`);
    scriptEl.setAttribute('label', '💬 Discussion')

    commentRef.current?.appendChild(scriptEl)
  }, [])

  return <section ref={commentRef} />
}
export default Comment
