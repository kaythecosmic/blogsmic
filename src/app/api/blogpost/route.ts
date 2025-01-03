import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

/*
let newBlog = {
  slug: blogTitle.replaceAll(" ", "-"),
  title: blogTitle,
  content: blogContent,
  date: new Date(),
  readTime: Math.ceil(tokens.length / 230),
  tags: selectedTags,
};
*/

export async function POST(req: NextRequest, res: NextResponse) {
  const requestBody = await req.json();
  console.log(requestBody);

  const { data, error } = await supabase
    .from("blogs")
    .insert([
      {
        slug: requestBody.slug,
        title: requestBody.title,
        content: requestBody.content,
        date: requestBody.date,
        readTime: requestBody.readTime,
        tags: requestBody.tags,
      },
    ])
    .select();

  if (data) {
    return NextResponse.json(
      {
        message: "Blog Created Successfully!",
        data: data,
      },
      {
        headers: {
          "Content-Type": "aplciation/json",
        },
        status: 201,
      }
    );
  }
  return NextResponse.json(
    {
      message: error.message,
      data: null,
    },
    {
      headers: {
        "Content-Type": "aplciation/json",
      },
      status: parseInt(error.code),
    }
  );
}
