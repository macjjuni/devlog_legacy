import { useState } from 'react'
import LottieItem from '@/components/common/LottieItem'
import errorLottie from '@/assets/lottie/mail.json'
import { textCopy } from '@/utils/copy'
import Tooltip from '@/components/views/Tooltip'
import { text } from '@/styles/global'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'not found email 404'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '50px', height: '50px' },
}

const Mail = () => {
  const [isMail, setMail] = useState<boolean>(false)
  const clickCopy = async () => {
    const isSuccess = await textCopy(EMAIL)
    if (isSuccess && !isMail) setMail(true)
  }

  return (
    <div className="relative flex justify-end items-center mt-[22px] w-[100%] pointer sm:justify-start">
      <button type="button" onClick={clickCopy} onTouchStart={clickCopy} className="flex justify-start items-center gap-2 relative">
        <LottieItem className="ml-[-6px]" defaultOption={defaultOption} animationData={errorLottie} />
        <h3 title="Copied Email" className={`relative top-[-2px] text-xlg ${text.black} hover:underline underline-offset-4`}>
          {EMAIL}
        </h3>
        <Tooltip value={isMail} setValue={setMail} />
      </button>
    </div>
  )
}

export default Mail
