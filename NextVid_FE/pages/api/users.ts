import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { client } from "../../utils/client";
import { allUsersQuery } from "../../utils/queries";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const query = allUsersQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  }
};
