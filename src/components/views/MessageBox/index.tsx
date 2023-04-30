import { useRef } from 'react'
import { toast } from 'react-toastify'
import { sendMessage } from '@/api/message'

const MessageBox = () => {
  const msgRef = useRef<HTMLTextAreaElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const sendMsg = async () => {
    if (!msgRef.current) return

    const msg = msgRef.current.value.trim()
    if (msg === '') {
      msgRef.current.focus()
      toast.warn('방명록을 작성해주세요 🙏')
      return
    }

    try {
      const res = await sendMessage(msg)
      if (res.data && res.data.status) {
        msgRef.current.value = ''
        toast.success('소중한 방명록 감사합니다. 🙇‍♂️')
      } else {
        toast.error('네트워크 오류입니다. 나중에 다시 시도해주세요. 🙏')
      }
    } catch (e) {
      toast.error('네트워크 오류입니다. 나중에 다시 시도해주세요. 🙏')
      console.error(e)
    } finally {
      btnRef.current?.blur()
    }
  }

  return (
    <div className="flex flex-col gap-2 ">
      <textarea
        ref={msgRef}
        name="kku-dev-message"
        id="kku-dev-message"
        maxLength={255}
        placeholder="소중한 방명록을 남겨주세요 ✉️"
        className="w-full border border-BLG600 p-md outline-0 resize-none"
      />
      <div className="flex justify-end">
        <button ref={btnRef} type="button" onClick={sendMsg} className="fcc border border-BLG600 w-[80px] h-[34px] px-lg">
          보내기
        </button>
      </div>
    </div>
  )
}

export default MessageBox
