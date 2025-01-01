"use client";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { SchemaRegisterForm } from "@/schemas/AuthSchemas";
import Link from "next/link";


const AuthPage = () => {
  const { register, handleSubmit, formState: {
    errors, isSubmitted
  } } = useForm<z.infer<typeof SchemaRegisterForm>>();

  return (
    <MaxWidthWrapper>
      <div className="flex h-[90vh]">
        <section className="flex flex-col w-8/12 rounded-md p-4 m-auto">
          <div className="text-2xl font-bold w-full text-center">
            Welcome to the blogsmic!
          </div>
          <div className="flex flex-col gap-1 mt-1">

            <div className='flex flex-col justify-center'>
              <label htmlFor="username">
                <span className='ml-2 px-2 relative top-3 bg-background font-medium'>
                  Username
                </span>
              </label>
              <input id="username" className="border rounded-md font-regular px-4 pb-3 pt-4 w-full focus:outline-none peer" type="text" {...register("username")} />
            </div>
            <div className='flex flex-col justify-center'>
              <label htmlFor="username">
                <span className='ml-2 px-2 relative top-3 bg-background font-medium'>
                  Password
                </span>
              </label>
              <input id="username" className="border rounded-md font-regular px-4 pb-3 pt-4 w-full focus:outline-none peer" type="text" {...register("username")} />
            </div>


            <div className="mt-4 flex justify-center items-center">
              <Button variant="outline" className="px-4 py-2 font-bold hover:bg-emerald-400 hover:text-black">Login</Button>
            </div>
            <span className="mt-4 text-center w-full">
              Already have an account? Login <Link href={"login"} className="font-bold text-emerald-600 cursor-pointer hover:underline">here</Link>
            </span>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default AuthPage;
