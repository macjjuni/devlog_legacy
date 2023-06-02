import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowAltCircleUp, FaArrowAltCircleLeft } from 'react-icons/fa'

import { useRouter } from 'next/router'
import { useAppSelector } from '@/redux/hook'
import { topButtonEffect, secondEffect } from './framer'

const TopButton = () => {
  const { back } = useRouter()
  const { scroll } = useAppSelector((state) => state.scroll)

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const onPageBack = () => {
    back()
  }

  return (
    <AnimatePresence>
      {scroll && (
        <div className="fixed bottom-[46px] lg:bottom-[4rem] lg:right-[calc(((100vw-1100px)/2)+1rem)] right-[1rem] flex flex-col gap-3 z-9999">
          <motion.button type="button" onClick={onScrollTop} className="fcc w-[42px] h-[42px] shadow-header rounded-full bg-BLG0" {...topButtonEffect}>
            <FaArrowAltCircleUp size="44" className="text-primary" />
          </motion.button>
          <motion.button type="button" onClick={onPageBack} className="fcc w-[42px] h-[42px] shadow-header rounded-full bg-BLG0" {...secondEffect()}>
            <FaArrowAltCircleLeft size="44" className="text-primary" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}

export default TopButton
