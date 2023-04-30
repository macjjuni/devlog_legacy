import axios, { AxiosResponse } from 'axios'
import { IMessage } from '@/types/types'

interface IMessageRes {
  status: boolean
}

export const sendMessage = async (msg: string) => {
  const url = '/api/createComment'
  const params: IMessage = { message: msg }
  const res: AxiosResponse<IMessageRes> = await axios.post(url, params)
  return res
}
