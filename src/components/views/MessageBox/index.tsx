import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { BsInfoCircle } from 'react-icons/bs'
import { writeMessage } from '@/api/message'
import LottieItem from '@/components/common/LottieItem'
import SpinnerLottie from '@/assets/lottie/spinner.json'

interface IValid {
  status: boolean
  msg?: string
}

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '25px', height: '25px' },
}

const MessageBox = () => {
  const msgRef = useRef<HTMLTextAreaElement>(null) // textArea Element Ref
  const btnRef = useRef<HTMLButtonElement>(null) // send Button Element Ref
  const [isLoad, setLoad] = useState<boolean>(false) // loading flag

  // message text validate
  const validMessage: () => IValid = () => {
    if (!msgRef.current || isLoad) return { status: false } // 로딩중일 때 실행방지
    const msg = msgRef.current.value.trim()
    if (msg === '') {
      msgRef.current.focus()
      toast.warn('방명록을 작성해주세요 🙏')
      return { status: false }
    }
    return { status: true, msg }
  }

  const onSendMessage = async () => {
    const { status, msg } = validMessage()

    if (!status || !msg) return
    setLoad(true)
    try {
      const res = await writeMessage(msg)
      if (res.data && res.data.status) {
        if (msgRef.current) msgRef.current.value = ''
        toast.success('소중한 방명록 감사합니다. 🙇‍♂️')
      } else {
        toast.error('네트워크 오류입니다. 나중에 다시 시도해주세요. 🙏')
      }
    } catch (e) {
      toast.error('네트워크 오류입니다. 나중에 다시 시도해주세요. 🙏')
      console.error(e)
    } finally {
      btnRef.current?.blur()
      setLoad(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 mb-[20px]">
      <textarea
        ref={msgRef}
        name="kku-dev-message"
        id="kku-dev-message"
        disabled={isLoad}
        maxLength={255}
        placeholder="소중한 방명록을 남겨주세요 ✉️"
        className="basic w-full border border-BLG600 dark:bg-BLG800 dark:text-BLG300 p-md outline-0 duration-300 resize-none"
      />
      <div className="flex justify-between items-center">
        <div className="fcc">
          <BsInfoCircle className="mr-2 dark:text-BLG100 durtaion-300" />
          <span className="relative top-[1px] text-[12px] dark:text-BLG300 leading-[1.2]">
            메시지는 주인장만 볼 수 있습니다.
            {/* <br />
            악성 봇 차단을 위해 IP 주소를 수집하고 있습니다. */}
          </span>
        </div>
        <button ref={btnRef} disabled={isLoad} type="button" onClick={onSendMessage} className="fcc w-[100px] h-[34px] px-lg border border-BLG600 dark:text-BLG300 duration-300">
          {!isLoad ? <span className="relative top-[2px]">보내기</span> : <LottieItem defaultOption={defaultOption} animationData={SpinnerLottie} />}
        </button>
      </div>
    </div>
  )
}

export default MessageBox
