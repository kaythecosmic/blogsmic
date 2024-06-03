"use client"
import useBlogs from "@/hooks/useBlogs"
export async function fetchBlogs(pageNum: number) {
    try {
        const { data } = useBlogs();
        return data;
    } catch (error) {
        console.log(error)
        // throw new Error("Unable to fetch data.");
    }
}