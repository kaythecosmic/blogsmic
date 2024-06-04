import prismadb from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("Hi from the server!");
    console.log("We are into the server");

    const allBlogs = await prismadb.blog.findMany();
    console.log(allBlogs);

    return Response.json(allBlogs);
  } catch (error) {
    console.log({ error });
    return new Response("Failed to fetch from the database.", { status: 500 });
  }
}
