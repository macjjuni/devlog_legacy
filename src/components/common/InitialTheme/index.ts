import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hook'
import { setDark, setLight, dark } from '@/redux/slice/theme'
import { initialColorMode } from '@/utils/colorMode'

const InitialTheme = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getTheme = initialColorMode()
    if (getTheme === dark) dispatch(setDark())
    else dispatch(setLight())
  }, [])

  return null
}

export default InitialTheme
