"use client";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod";
import Link from "next/link";
import { SchemaLoginForm } from "@/schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";


const AuthPage = () => {
  const { register, handleSubmit, setError, formState: {
    errors, isSubmitting
  } } = useForm<z.infer<typeof SchemaLoginForm>>(
    {
      resolver: zodResolver(SchemaLoginForm)
    }
  );

  const HandleLogin: SubmitHandler<z.infer<typeof SchemaLoginForm>> = (data: z.infer<typeof SchemaLoginForm>) => {
    console.log(data);
  }

  return (
    <MaxWidthWrapper>
      <div className="flex h-[90vh]">
        <section className="flex flex-col w-8/12 rounded-md p-4 m-auto">
          <div className="text-2xl font-bold w-full text-center">
            Glad to have you back!
          </div>
          <form className="flex flex-col gap-1 mt-1" onSubmit={handleSubmit(HandleLogin)}>

            {/* username */}
            <div className='flex flex-col justify-center'>
              <label htmlFor="username">
                <span className='ml-2 px-2 relative top-3 bg-background font-medium'>
                  Username
                </span>
              </label>
              <input id="username" className="border rounded-md font-regular px-4 pb-3 pt-4 w-full focus:outline-none peer" type="text" {...register("username")} />
              <div className="text-red-500 text-sm mt-1 mb-2 min-h-5">{errors.username && errors.username.message}</div>
            </div>

            {/* password */}
            <div className='flex flex-col justify-center'>
              <label htmlFor="username">
                <span className='ml-2 px-2 relative top-3 bg-background font-medium'>
                  Password
                </span>
              </label>
              <input id="password" className="border rounded-md font-regular px-4 pb-3 pt-4 w-full focus:outline-none peer" type="password" {...register("password")} />

              <div className="text-red-500 text-sm mt-1 mb-2 min-h-5">{errors.password && errors.password.message}</div>
            </div>


            <div className="mt-4 flex justify-center items-center">
              <input type="submit" className="px-4 py-2 font-bold border rounded-md hover:cursor-pointer hover:bg-emerald-400 hover:text-black" value={isSubmitting ? "Loading..." : "Submit"} />
            </div>
            <span className="mt-4 text-center w-full">
              Don&apos;t have an account? Register <Link href={"register"} className="font-bold text-emerald-600 cursor-pointer hover:underline">here</Link>
            </span>
          </form>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default AuthPage;
