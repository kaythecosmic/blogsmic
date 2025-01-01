"use client"
import { Blog } from "@/components/Blog";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/ui/spinner";
import { supabase } from "@/lib/supabase";
import { typeBlog } from "@/types/Blog";
import { PostgrestError } from "@supabase/supabase-js";

export default function Home() {
  const [blogs, setBlogs] = useState<BlogModel[] | undefined>(undefined);
  const [fetchError, setsetFetchError] = useState<PostgrestError | undefined>(undefined);
  // console.log(supabase);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('blogs')
        .select("*");
      if (error) {
        console.error('Error fetching data:', error.message)
        setsetFetchError(error as any)
        setBlogs(undefined)
      }
      else {
        console.log(data);
        setBlogs(data)
      }
    }
    fetchData();
  }, [])
  if (!blogs) {
    return (
      <MaxWidthWrapper className="pt-4">
        <h5 className="flex justify-center items-center text-center p-3">
          <Spinner />
        </h5>
      </MaxWidthWrapper>
    );
  }

  if (fetchError) {
    return (
      <MaxWidthWrapper className="pt-4">
        <h5 className="flex justify-center items-center text-center p-3">
          {fetchError.message}
        </h5>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper className="my-4">
      {blogs ? blogs.map((blog: any) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          slug={blog.slug}
          content={blog.content}
          date={new Date(blog.date)}
          readTime={blog.readTime}
        />
      )) : <div className="text-2xl text-center p-4 font-bold">
        Be the first one to <Link href="/scratch" className="text-emerald-500 underline hover:text-emerald-700">post a blog!</Link> </div>}
    </MaxWidthWrapper>
  );
}
