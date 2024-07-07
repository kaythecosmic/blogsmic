"use client";
import { Blog } from "@/components/Blog";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import { typeBlog } from "@/types/Blog";
import Link from "next/link";
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/ui/spinner";

export default function Home() {
    const [blogs, setBlogs] = useState<typeBlog[] | undefined>(undefined);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher("/api/blogs");
                if (response.length > 0) {
                    setBlogs(response);

                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
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

    return (
        <MaxWidthWrapper className="my-4">
            {blogs && blogs.length > 0 ? blogs.map((blog) => (
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