import prismadb from "@/lib/prismadb";
import { NextRequest } from "next/server";
import { typeBlog } from "@/types/Blog";
export async function GET(req: NextRequest) {
  try {
    const allBlogs: typeBlog[] = await prismadb.blog.findMany();
    console.log(allBlogs.length);
    return Response.json(allBlogs.reverse());
  } catch (error) {
    console.log({ error });
    return new Response("Failed to fetch from the database.", { status: 500 });
  }
}
