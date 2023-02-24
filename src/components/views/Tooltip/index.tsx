import { type SetStateAction, Dispatch, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TooltipAnimation } from './framer'

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
          <motion.div {...TooltipAnimation} className="tooltip bg-BLG300 after:border-l-BLG300">
            <span>Copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Tooltip
