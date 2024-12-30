import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("you are in route.ts");
  if (req.method != "POST") {
    return new Response("Request not compatible with server.", {
      status: 405,
    });
  }

  try {
    console.log(req.url);
    const { slug, title, content, date, readTime, tags } = await req.json();
    const { data, error } = await supabase
      .from("blogs")
      .insert([
        {
          slug: slug,
          title: title,
          content: content,
          date: date,
          readTime: readTime,
          tags: tags,
        },
      ])
      .select();
    console.log(data);
    console.log(error);

    return new Response("Successfull push", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Blog Post Failed", {
      status: 400,
    });
  }
}
