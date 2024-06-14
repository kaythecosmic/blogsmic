"use client";
import Blog from "@/components/Blog";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import { typeBlog } from "@/types/Blog";
import Spinner from "@/components/ui/spinner";
import Link from "next/link";
import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";

export default function Home() {

  const [blogs, setBlogs] = useState<typeBlog[]>()
  const { data, error, isLoading } = useSWR<typeBlog[]>(`/api/blogs`, fetcher);

  function callMutate() {
    mutate(`/api/blogs`);
  }
  useEffect(() => {
    if (data && !isLoading) {
      data.reverse();
      setBlogs(data);
      mutate(`/api/blogs`);
    } else if (error) {
      console.log("Still Fetching");
    }
  }, [data]);

  if (isLoading) {
    return (
      <MaxWidthWrapper className="pt-4">
        <h5 className="flex justify-center items-center text-center p-3">
          <Spinner />
        </h5>
      </MaxWidthWrapper>
    );
  }

  if (error) {
    return (
      <MaxWidthWrapper className=" pt-4">
        <h5 className=" bg-muted text-center p-3">
          Could not fetch blogs. Please reload.
        </h5>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper className="my-4">
      {data && data.length > 0 ? data.map((blog) => (
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