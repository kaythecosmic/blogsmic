import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return new Response("Not a valid request method.", {status:501});
  }
  try {
    const url = req.url ?? "";
    const slugKey = url.split("delete/")[1];
    const deletetedBlogResponse = await prismadb.blog.delete({
      where: {
        slug: slugKey,
      },
    });
    return Response.json(deletetedBlogResponse);
  } catch (error) {
    console.log({ error });
    return new Response("Failed to delete from the database.", { status: 500 });
  }
}
