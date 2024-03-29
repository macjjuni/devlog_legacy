import { useState } from 'react'
import LottieItem from '@/components/common/LottieItem'
import errorLottie from '@/assets/lottie/mail.json'
import { textCopy } from '@/utils/copy'
import Tooltip from '@/components/views/Tooltip'
import { text } from '@/styles/global'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'not found email'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '50px', height: '50px' },
}

const Mail = () => {
  const [isShow, setShow] = useState<boolean>(false) // 렌더링 state
  const [isCopy, setCopy] = useState<boolean>(false) // 복사 성공 여부

  // 복사 기능 로직
  const clickCopy = async () => {
    const isSuccess = await textCopy(EMAIL)
    if (isSuccess) setCopy(true)
  }

  const onEnter = () => {
    setShow(true)
  }

  const onLeave = () => {
    setTimeout(() => {
      setShow(false) // 툴팁 렌더링 해제
      setCopy(false) // 복사완료 해제
    }, 200)
  }

  return (
    <div className="relative flex justify-end items-center w-full pointer">
      <button type="button" onClick={clickCopy} onMouseEnter={onEnter} onMouseLeave={onLeave} className="flex justify-start items-center gap-2 relative">
        <LottieItem className="ml-[-6px]" defaultOption={defaultOption} animationData={errorLottie} />
        <h3 title="Copied Email" className={`relative top-[-2px] text-md ${text.black} hover:underline underline-offset-4`}>
          {EMAIL}
        </h3>
        <Tooltip isShow={isShow} isCopy={isCopy} />
      </button>
    </div>
  )
}

export default Mail
