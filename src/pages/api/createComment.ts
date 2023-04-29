import type { NextApiRequest, NextApiResponse } from 'next'
// import { notion } from '@/notion/notion'

const handler = (req: NextApiRequest, res: NextApiResponse<{ data: boolean }>) => {
  // const respense = await notion.comments.create({
  //   parent: {
  //     page_id: '434339f24bcf4440b1f7ab048f546801',
  //   },
  //   rich_text: [
  //     {
  //       text: {
  //         content: 'Hello world',
  //       },
  //     },
  //   ],
  // })
  // console.log(respense)
  res.status(200).json({ data: true })
}
export default handler
