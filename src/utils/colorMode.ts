import { ThemeTypes } from '@/types/theme'

export const getColorMode = () => {
  // 현재 저장된 컬러모드 가져오기
  const colorMode = localStorage.getItem('theme')
  return colorMode as ThemeTypes
}

export const initialColorMode = () => {
  // 로컬스토리지에 컬러모드 데이터가 없을 경우
  const theme = getColorMode()
  if (theme === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return 'dark'
    }
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    return 'light'
  }
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    return 'dark'
  }
  document.documentElement.classList.remove('dark')
  return 'light'
}

export const toggleColorMode = () => {
  // 컬러모드 토글
  const colorMode = localStorage.getItem('theme')
  if (colorMode === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    return
  }
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
}

export const setMetaThemeColor = (hexCode: string) => {
  const themeColor: HTMLMetaElement | null = document.querySelector("meta[name='theme-color']")
  if (themeColor !== null) themeColor.content = hexCode
}
