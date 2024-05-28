import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("Hi from the server!");
        let allBlogs = await prismadb.blog.findMany({ where: {}, });
        return Response.json(allBlogs);
    } catch (error) {
        console.log({ error });
        return new Response("Failed to fetch from the database.", { status: 500 })
    }
}

// todo
// you need to make requests for 10 records and then make request for 10 more but after skipping 10.
// created an action, refer to the video https://www.youtube.com/watch?v=UWwUWpcFEBM