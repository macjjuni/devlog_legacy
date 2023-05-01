import type { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import { notion } from '@/notion/notion'

interface CreateCommentReq extends NextApiRequest {
  body: {
    message: string
  }
}
// 댓글용 Page ID
const pageId = '1c71dd13821f492f8e06c6206d21d9b2'

const handler = async (req: CreateCommentReq, res: NextApiResponse<{ status: boolean }>) => {
  // 잘못된 호출 핸들링
  if (req.method !== 'POST' || !req.body.message) {
    res.status(200).json({ status: false })
  }

  // Get user IP
  const userIP = requestIp.getClientIp(req) || 'unknown'

  // 댓글 작성
  try {
    await notion.comments.create({
      parent: { page_id: pageId },
      rich_text: [{ text: { content: `${req.body.message} - ${userIP}` } }],
    })
    res.status(200).json({ status: true })
  } catch (e) {
    console.error(e)
    res.status(200).json({ status: false })
  }
}
export default handler
