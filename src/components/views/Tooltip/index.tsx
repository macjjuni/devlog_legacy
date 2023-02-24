import { type SetStateAction, Dispatch, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TooltipAnimation } from './framer'
import { text } from '@/styles/global'

const Tooltip = ({ value, setValue }: { value: boolean; setValue: Dispatch<SetStateAction<boolean>> }) => {
  useEffect(() => {
    if (value)
      setTimeout(() => {
        setValue(false)
      }, 2000)
  }, [value])

  return (
    <>
      <AnimatePresence>
        {value && (
          <motion.div {...TooltipAnimation} className="tooltip bg-BLG200 opacity-50 dark:bg-BLG700 after:border-l-BLG200 dark:after:border-l-BLG700">
            <span className={`${text.normal}`}>Copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Tooltip
