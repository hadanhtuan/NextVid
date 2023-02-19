import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { client } from "../../utils/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const { userId, postId, comment } = req.body;

    let data;
      data = await client
        .patch(postId)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            comment,
            _key: uuid(),
            postedBy: { _type: 'postedBy', _ref: userId },
          },
        ])
        .commit()
    res.status(200).json(data)
  }
};
