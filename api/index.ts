import { VercelRequest, VercelResponse } from "@vercel/node"


export default async (req: VercelRequest, res: VercelResponse) => {
   const path = req.query.path || '/'
   res.json({
      'url': path
   })
}