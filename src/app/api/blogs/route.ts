import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const allBlogs: typeBlog[] = await prismadb.blog.findMany();
    // console.log(allBlogs.length);
    return Response.json({});
  } catch (error) {
    console.log({ error });
    return new Response("Failed to fetch from the database.", { status: 500 });
  }
}
