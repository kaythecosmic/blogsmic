import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const About: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <main className='mt-8 my-2'>
        <div className="flex flex-col items-begin justify-center w-full">
          <span className="text-2xl italic opacity-80">&gt; not your usual blog</span>
          <span className="mr-2 text-6xl font-bold">a poorly managed, thought rich blog.</span>
        </div>

      </main>
    </MaxWidthWrapper >
  );
};

export default About;
