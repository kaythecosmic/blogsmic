import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return new Response("Not a valid request method.", {status:501});
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
