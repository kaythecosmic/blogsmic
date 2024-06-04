"use client";
import Blog from "@/components/Blog";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import useBlogs from "@/hooks/useBlogs";
import { typeBlog } from "@/types/Blog";
import Spinner from "@/components/ui/spinner";

export default function Home() {
  const [blogs, setBlogs] = useState<typeBlog[]>([]);
  const { data, error, isLoading } = useBlogs();

  useEffect(() => {
    if (data) {
      data.reverse();
      setBlogs(data);
      console.log(data.length)
    } else if (error) {
      console.log("Fetch failed!");
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <MaxWidthWrapper className=" pt-4">
        <h5 className="flex justify-center items-center bg-muted text-center p-3">
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
    <MaxWidthWrapper className=" pt-4">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          slug={blog.slug}
          content={blog.content}
          date={new Date(blog.date)}
          readTime={blog.readTime}
        />
      ))}
    </MaxWidthWrapper>
  );
}
