import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hook'
import { setDark, setLight, dark } from '@/redux/slice/theme'
import { darkBg, lightBg } from '@/styles/global'
import { initialColorMode, setMetaThemeColor } from '@/utils/colorMode'

const InitialTheme = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getTheme = initialColorMode()
    if (getTheme === dark) {
      dispatch(setDark())
      setMetaThemeColor(darkBg)
      return
    }
    dispatch(setLight())
    setMetaThemeColor(lightBg)
  }, [])

  return null
}

export default InitialTheme
