import { AnimatePresence, motion } from 'framer-motion'
import { TooltipAnimation } from './framer'
import { text } from '@/styles/global'

const Tooltip = ({ isShow, isCopy }: { isShow: boolean; isCopy: boolean }) => {
  return (
    <>
      <AnimatePresence>
        {isShow && (
          <motion.div {...TooltipAnimation} className="tooltip bg-BLG200 opacity-50 dark:bg-BLG700 after:border-l-BLG200 dark:after:border-l-BLG700">
            <span className={`${text.normal}`}>{!isCopy ? 'Copy?' : 'Copied!'}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Tooltip
