import Blog from "@/components/Blog";
import prismadb from "@/lib/prismadb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {

  // async function getData() {
  //   allBlogs = await prismadb.blog.findMany({
  //     where: {},
  //   });
  // }

  // const blogs = await 

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
