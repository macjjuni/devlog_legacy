import { memo } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { setDark, setLight, dark, light } from '@/redux/slice/theme'
import * as Theme from '@/utils/colorMode'

const ToggleTheme = () => {
  const { theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const onToggle = () => {
    Theme.toggleColorMode()
    if (theme === dark) dispatch(setLight())
    else dispatch(setDark())
  }

  return (
    <button type="button" onClick={onToggle} className="fcc w-[36px] h-[36px] p-sm ml-[-10px]">
      {theme === light && <ImSun fontSize="22px" color="#9d6fff" />}
      {theme === dark && <FaMoon fontSize="22px" color="#ffea20" />}
    </button>
  )
}

export default memo(ToggleTheme)
