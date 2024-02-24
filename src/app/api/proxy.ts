// pages/api/proxy.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  try {
    const response = await fetch(url as string);
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
