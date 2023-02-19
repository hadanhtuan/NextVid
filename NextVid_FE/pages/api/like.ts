import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { client } from "../../utils/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const { userId, postId, like } = req.body;

    let data;
    if (like) {
      data = await client
        .patch(postId)
        .setIfMissing({ likes: [] })
        .insert("after", "likes[-1]", [
          {
            _key: uuid(),
            _ref: userId,
          },
        ])
        .commit()
    } else {
      data = await client.patch(postId).unset([`likes[_ref == "${userId}"]`]).commit()
    }
    res.status(200).json(data)
  }
};
