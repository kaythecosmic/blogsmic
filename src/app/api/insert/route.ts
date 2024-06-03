import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest, res: NextResponse) {
   
    console.log("you are in route.ts");
    if (req.method != "POST") {
        return new Response("Request not compatible with server.", {
            status: 405,
        });
    }

    try {
        console.log(req.url)
        const { slug, title, content, date, readTime } = await req.json();
        const theBlogPost = await prismadb.blog.create({
            data: {
                slug,
                title,
                content,
                date,
                readTime
            }
        })
        console.log(theBlogPost);
        return new Response("Successfull push", {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response("Blog Post Failed", {
            status: 400,
        });
    }
}