import { AnimatePresence, motion } from 'framer-motion'
import { TfiArrowCircleUp } from 'react-icons/tfi'
import { useAppSelector } from '@/redux/hook'
import { topButtonAnimation } from './framer'

const TopButton = () => {
  const { scroll } = useAppSelector((state) => state.scroll)

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {scroll && (
        <motion.div {...topButtonAnimation} className="fixed bottom-[1rem] lg:bottom-[3rem] lg:right-[calc(((100vw-1100px)/2)+1rem)] right-[1rem] z-9999">
          <button type="button" onClick={onScrollTop} className="shadow-header rounded-full bg-BLG0 dark:bg-BLG900">
            <TfiArrowCircleUp size="42" className="text-primary" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TopButton
