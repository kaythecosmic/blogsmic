"use client";
import Blog from "@/components/Blog";
import prismadb from "@/lib/prismadb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {

  async function getData() {
    console.log("so this ran");
    try {
      const allBlogs = await prismadb.blog.find();
      console.log(allBlogs); // To log the fetched blogs
      return allBlogs; // Return the blogs if needed
    } catch (error) {
      console.error("Error occurred while fetching blogs:", error);
    }
  }

  // getData();
  return (
    <MaxWidthWrapper className=" pt-4">
      <Blog
        id="123456"
        title="Hello, World!"
        slug="hello-world"
        content="this is my first ever blog!"
        date={new Date()}
        readTime={5}
      />
    </MaxWidthWrapper>
  );
}
