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

// todo
// you need to make requests for 10 records and then make request for 10 more but after skipping 10.
// created an action, refer to the video https://www.youtube.com/watch?v=UWwUWpcFEBM
