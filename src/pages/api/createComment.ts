import type { NextApiRequest, NextApiResponse } from 'next'
import { notion } from '@/notion/notion'

interface CreateCommentReq extends NextApiRequest {
  body: {
    message: string
  }
}

const handler = async (req: CreateCommentReq, res: NextApiResponse<{ status: boolean }>) => {
  // 잘못된 호출 핸들링
  if (req.method !== 'POST' || !req.body.message) {
    res.status(200).json({ status: false })
  }
  // 댓글 작성
  try {
    await notion.comments.create({
      parent: {
        page_id: '1c71dd13821f492f8e06c6206d21d9b2',
      },
      rich_text: [
        {
          text: {
            content: req.body.message,
          },
        },
      ],
    })
    res.status(200).json({ status: true })
  } catch (e) {
    console.error(e)
    res.status(200).json({ status: false })
  }
}
export default handler
