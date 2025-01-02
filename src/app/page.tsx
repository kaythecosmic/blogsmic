import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Volume2 } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <MaxWidthWrapper className="text-gray-600 flex flex-col items-center justify-center px-6">
      <div className="flex my-auto md:w-4/5 mx-auto py-24 flex-col md:items-start md:text-left items-center text-center">
        <p className="xl:w-3/4 text-gray-600 text-lg">
          Not just a blog.
        </p>
        <h1 className="mb-5 font-semibold lg:text-6xl text-4xl items-center text-gray-900">
          poorly maintained, but a thought rich blog.
        </h1>
        <div className="flex justify-center">
          <Link
            className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
            href="/blogs"
          >
            <div className="flex gap-2 justify-center items-center"><span>read more</span> <ArrowRight size={18} /></div>
          </Link>
        </div>
      </div>

      <div className="bg-gray-200 text-gray-900 p-6 rounded-lg md:w-4/5">
        <div className="flex items-center gap-4 mb-4">
          <button
            className="p-2 rounded-full hover:bg-gray-400 transition-colors"
            aria-label="Play pronunciation"
          >
            <Volume2 className="size-8 text-primary" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary">
              <span>blogsmic</span>
            </h1>
            <h1 className="text-sm font-medium text-primary">
              <span>/blɒgz.mɪk/</span>
            </h1>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-primary italic">noun</span>
          <ol className="mt-2 list-decimal list-inside">

            <li className="mb-2">
              <span className="text-primary font-semibold">a cosmos of random blogs</span>
              <p className="pl-6 mt-1 text-gray-600">The entrpoy of the thoughts in mind can be resonated with the one of entities in the cosmos.<br /> Hence, welcome to <b>blogsmic</b>.</p>
            </li>
          </ol>
        </div>
      </div>
    </MaxWidthWrapper >
  );
}