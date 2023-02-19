import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { client } from "../../../utils/client";
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from "../../../utils/queries";
6
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {

    const query1 = singleUserQuery(req.query.id);
    const query2 = userCreatedPostsQuery(req.query.id);
    const query3 = userLikedPostsQuery(req.query.id);

    const res1 = await client.fetch(query1);
    const res2 = await client.fetch(query2);
    const res3 = await client.fetch(query3);
   
    res.status(200).json({
      user: res1[0],
      userVideos: res2,
      userLikedVideo: res3
    });
  }
};