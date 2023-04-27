import { ThemeTypes } from './colorMode'

type ExcludeNullThemeTypes = Exclude<ThemeTypes, null>

export const targetId = 'kku-dev-comment'

// utterances 스크립트 삽입
export const appendUtter = (dom: HTMLElement, theme: Exclude<ThemeTypes, null>) => {
  const scriptEl = document.createElement('script')
  scriptEl.src = 'https://utteranc.es/client.js'
  scriptEl.async = true
  scriptEl.crossOrigin = 'anonymous'
  scriptEl.setAttribute('repo', 'macjjuni/kku.dev-comment')
  scriptEl.setAttribute('issue-term', 'url')
  scriptEl.setAttribute('theme', `github-${theme}`)
  scriptEl.setAttribute('label', '💬 Discussion')
  dom.appendChild(scriptEl)
}

// utterances 삽입 유무
export const isContainUtter = (parentDom: HTMLElement) => {
  let isContain = false
  for (let i = 0; i < parentDom.children.length; i++) {
    isContain = parentDom.children[i].classList.contains('utterances')
  }
  return isContain
}

// 테마 변경
export const toggleTheme = (theme: ExcludeNullThemeTypes) => {
  const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')
  if (!iframe) return
  iframe.contentWindow?.postMessage({ type: 'set-theme', theme: `github-${theme}` }, 'https://utteranc.es')
}

// Remove LazyLoading
export const removeLazy = () => {
  const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')
  if (!iframe) return
  iframe.setAttribute('loading', 'eager')
}

// 스크롤 이동
export const scrollComment = (e: React.MouseEvent) => {
  e.preventDefault()
  const ancorEle = document.createElement('a')
  ancorEle.href = `#${targetId}`
  ancorEle.click()
  setTimeout(() => {
    ancorEle.click()
    ancorEle.remove()
  }, 1200)
}
