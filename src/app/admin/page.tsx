"use client"
import { SimpleBlog } from '@/components/Blog'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Spinner from '@/components/ui/spinner'
import fetcher from '@/lib/fetcher'
import { typeBlog } from '@/types/Blog'
import axios from 'axios'
import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Admin = () => {

    const { data, error, isLoading, mutate } = useSWR<typeBlog[]>(`/api/blogs`, fetcher);

    const handleDeleteBlog = (slugKey: string) => {
        axios.get(`/api/delete/${slugKey}`).then((res) => res.data);
        callMutate();
    }

    const callMutate = async () => {
        await mutate()
    }

    if (isLoading) {
        return (
            <MaxWidthWrapper className="pt-4">
                <h5 className="flex justify-center items-center text-center p-3">
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
        <MaxWidthWrapper>
            <div className='mt-5 text-foreground font-bold text-xl'>Welcome, the cosmic!</div>
            <section className='mt-2'>
                {data && data.length > 0 ? data.map((blog) => (
                    <SimpleBlog
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        slug={blog.slug}
                        content={blog.content}
                        date={new Date(blog.date)}
                        readTime={blog.readTime}
                        onClick={() => handleDeleteBlog(blog.slug)}
                    />
                )) : <div className="text-2xl text-center p-4 font-bold">
                    Be the first one to <Link href="/scratch" className="text-emerald-500 underline hover:text-emerald-700">post a blog!</Link> </div>}
            </section>
        </MaxWidthWrapper>
    )
}

export default Admin
