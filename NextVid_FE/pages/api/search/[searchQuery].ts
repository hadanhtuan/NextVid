import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { searchPostsQuery, searchUsersQuery } from "../../../utils/queries";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { searchQuery } = req.query;

    const query1 = searchPostsQuery(searchQuery);
    const query2 = searchUsersQuery(searchQuery);
    
    const res1 = await client.fetch(query1);
    const res2 = await client.fetch(query2);

    res.status(200).json({
      users: res2,
      videos: res1
    })
  }
};
