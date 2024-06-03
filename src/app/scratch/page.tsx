"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UploadIcon } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuillRichTE from "@/components/QuillRichTE";

const SratchPage = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const router = useRouter();
  console.log(blogContent);

  const handleBlogPost = () => {
    const tokens = blogContent.split(" ");
    let newBlog = {
      slug: blogTitle.replaceAll(" ", "-"),
      title: blogTitle,
      content: blogContent,
      date: new Date(),
      readTime: Math.ceil(tokens.length / 230),
    };
    axios.post("/api/insert/", newBlog);
    router.push("/");
  };

  const handleBlogContentChange = (latestContent: string) => {
    setBlogContent(latestContent);
  }

  return (
    <MaxWidthWrapper className="mt-4">
      <h1 className="text-2xl font-bold">scratch a new blog...</h1>
      <section className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="add a title"
          className="py-1 text-2xl font-bold border-0 border-b-[1px] border-foreground focus:outline-none"
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }}
          required
        />
        {/* quillTE */}

        <QuillRichTE onChange={handleBlogContentChange} />

        <div className="flex justify-end mt-[4rem]">
          <Button
            variant={"secondary"}
            className="text-md font-bold border hover:bg-background"
            onClick={handleBlogPost}
          >
            Post
            <UploadIcon className="ml-1 h-4" />
          </Button>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default SratchPage;
