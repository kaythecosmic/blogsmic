"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UploadIcon } from "lucide-react";
import { useState } from "react";
import QuillRichTE from "@/components/QuillRichTE";

const SratchPage = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const alltags = ["Music", "Photography", "Design", "Movies", "Travel", "Fashion", "Food", "Reviews", "Education", "Art"]
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleBlogPost = () => {
    const tokens = blogContent.split(" ");
    console.log(encodeURI(blogTitle.replaceAll(" ", "-")));

    let newBlog = {
      slug: encodeURI(blogTitle.replaceAll(" ", "-")),
      title: blogTitle,
      content: blogContent,
      date: new Date(),
      readTime: Math.ceil(tokens.length / 230),
      tags: selectedTags
    };

    axios.post("/api/blogpost/", newBlog).then(res => {
      window.location.href = "/blogs";
    });
  };

  const handleTagSelect = (tag: string) => {
    if (selectedTags.indexOf(tag) > -1) {
      console.log("found in array");
      console.log(selectedTags);

      const index = selectedTags.indexOf(tag);
      if (index > -1) {
        const newSelectedTags = selectedTags.slice(0, index - 1).concat(selectedTags.slice(index, selectedTags.length - 1));
        setSelectedTags(newSelectedTags);
      }
    } else {
      console.log(selectedTags);
      const newSelectedTags = [...selectedTags, tag];
      setSelectedTags(newSelectedTags);

    }
  }

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

        {/* Tags */}
        <div className="flex flex-wrap mt-2 gap-2 justify-start text-[0.7rem]">
          {alltags.map((tag) => (
            <span id={tag}
              key={tag}
              className={`py-1 px-3 border rounded-full cursor-pointer transition font-medium hover:bg-accent ${selectedTags.includes(tag) ? "bg-slate-600 text-white hover:text-black hover:bg-slate-600" : ""}`}
              onClick={(e) => { handleTagSelect(tag) }} >
              {selectedTags.includes(tag) ? "- " + tag : "+ " + tag}
            </span>
          ))}
        </div>

        {/* quillTE */}

        <QuillRichTE onChange={handleBlogContentChange} />

        <div className="flex justify-end mt-[2rem]">
          <Button
            variant={"default"}
            className="text-md font-regular border"
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
