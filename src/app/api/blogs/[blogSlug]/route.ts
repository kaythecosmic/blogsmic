import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const url = req.url ?? "";
    const slugKey = url.split("blogs/")[1];
    const requiredBlog = await prismadb.blog.findUnique({
      where: {
        slug: slugKey,
      },
    });
    return Response.json(requiredBlog);
  } catch (error) {
    console.log({ error });
    return new Response("Failed to fetch from the database.", { status: 500 });
  }
}
