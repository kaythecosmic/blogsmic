"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBlogs = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/blogs`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
    mutate
  };
};

export default useBlogs;
