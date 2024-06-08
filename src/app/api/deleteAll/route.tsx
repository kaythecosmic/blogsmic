import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        // const theBlogPost = await prismadb.blog.deleteMany();
        return new Response("Successfull delete", {
            status: 200,
        });

    } catch (error) {
        console.log(error);
        return new Response("Blog Post Failed", {
            status: 400,
        });
    }
}