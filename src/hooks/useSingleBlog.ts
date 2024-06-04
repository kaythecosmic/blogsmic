"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useSingleBlog = (blogSlug: string) => {
  const { data, error, isLoading } = useSWR(`/api/blogs/${blogSlug}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export default useSingleBlog;
