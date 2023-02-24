import { FC } from 'react'
import Lottie, { type LottieProps } from 'react-lottie-player'

export interface ILottieItem {
  defaultOption: LottieProps
  animationData: object
  className?: string
}

const LottieItem: FC<ILottieItem> = ({ defaultOption, animationData, className = '' }) => {
  return <Lottie {...defaultOption} animationData={animationData} className={className} />
}
export default LottieItem
