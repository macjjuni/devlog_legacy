import { useState } from 'react'
// import Lotties from '@/components/common/Lotties'
// import errorLottie from '@/assets/lottie/mail.json'
import { textCopy } from '@/utils/copy'
import Tooltip from '@/components/views/Tooltip'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'not found email 404'

// Lottie Option
// const defaultOption = {
//   loop: true,
//   play: true,
//   style: { width: '50px', height: '50px' },
// }

const Mail = () => {
  const [isMail, setMail] = useState<boolean>(false)
  const clickCopy = async () => {
    const isSuccess = await textCopy(EMAIL)
    if (isSuccess && !isMail) setMail(true)
  }

  return (
    <div className="relative flex justify-end items-center mt-[50px] w-[100%] pointer sm:justify-start">
      <button type="button" onClick={clickCopy} onTouchStart={clickCopy} className="flex justify-start items-center gap-3">
        <div>로티</div>
        {/* <M.LottieCustom>
          <Lotties defaultOption={defaultOption} animationData={errorLottie} />
        </M.LottieCustom> */}
        {/* <M.Spacer /> */}
        <h3 className="relative">
          {EMAIL}
          <Tooltip value={isMail} setValue={setMail} />
        </h3>
      </button>
    </div>
  )
}

export default Mail
