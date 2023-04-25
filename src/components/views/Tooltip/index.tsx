import { AnimatePresence, motion } from 'framer-motion'
import { TooltipAnimation } from './framer'
import { text } from '@/styles/global'

// isShow: 렌더링을 위한 state
// isCopy: 복사완료 유무 확인을 위한 state

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
