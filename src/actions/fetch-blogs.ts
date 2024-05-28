"use server"

import { Blog } from "@/types/Blog";
import useBlogs from "@/hooks/useBlogs"

export async function fetchBlogs() {
    try {
        const { data } = useBlogs();
        return data;
    } catch (error) {
        throw new Error("Unable to fetch data");
    }
}