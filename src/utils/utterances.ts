import { ThemeTypes } from './colorMode'

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

export const removeUtter = (parentDom: HTMLElement) => {
  for (let i = 0; i < parentDom.children.length; i++) {
    const isContain = parentDom.children[i].classList.contains('utterances')
    if (isContain) parentDom.children[i].remove()
  }
}

export const isContainUtter = (parentDom: HTMLElement) => {
  let isContain = false
  for (let i = 0; i < parentDom.children.length; i++) {
    isContain = parentDom.children[i].classList.contains('utterances')
  }
  return isContain
}
