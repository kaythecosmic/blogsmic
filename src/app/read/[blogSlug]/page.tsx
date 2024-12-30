"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Spinner from '@/components/ui/spinner';
import useSingleBlog from '@/hooks/useSingleBlog'
import { usePathname } from "next/navigation";
import tagList from '@/lib/taglist';
import { TagColorMap } from '@/lib/taglist';
import { Tags } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';


const ReadSingleBlog = () => {

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const pathname = usePathname()
  const slugKey = pathname.split('read/')[1];
  const [data, setData] = useState<BlogModel | undefined>(undefined);
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('blogs')
        .select("*")
        .eq('slug', slugKey)

      if (error) {
        console.error('Error fetching data:', error)
        setData(undefined)
      }
      else {
        // console.log(data[0]);
        setData(data[0])
      }
    }
    fetchData();
  }, [])

  // if (isLoading) {
  //   return (
  //     <MaxWidthWrapper className=" pt-4">
  //       <h5 className="flex justify-center items-center text-center p-3">
  //         <Spinner />
  //       </h5>
  //     </MaxWidthWrapper>
  //   );
  // }
  // if (error) {
  //   return (
  //     <MaxWidthWrapper className=" pt-4">
  //       <h5 className=" bg-muted text-center p-3">
  //         Could not fetch blogs. Please reload.
  //       </h5>
  //     </MaxWidthWrapper>
  //   );
  // }
  if (data) {
    return (
      <MaxWidthWrapper>
        <main className='mt-8 my-2'>
          {/* Header */}
          <div className='flex flex-col my-4'>
            <div className='flex justify-between text-muted-foreground my-1 text-sm'>
              <span>
                {days[new Date(data.date).getDay()]} - {new Date(data.date).getDate()} {months[new Date(data.date).getMonth()]},{" "}
                {new Date(data.date).getFullYear()}
              </span>
              <span>
                {data.readTime} MIN READ
              </span>
            </div>
            <div className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>
              {data.title}
            </div>
          </div>

          {/* Tags */}
          {data.tags.length > 0 &&
            <div className="flex flex-wrap mt-2 gap-2 justify-start text-[0.7rem]">
              <span className='pt-0.5 flex items-center justify-center'><Tags className='h-4 flex items-center justify-center' /></span>
              {data.tags.map(
                (tag) => (
                  <span
                    id={tag}
                    key={tag}
                    className={`py-px px-2 align-middle rounded-full text-black font-medium ${TagColorMap[tag as keyof typeof TagColorMap]}`}
                  >
                    {tag}
                  </span>
                ))}

            </div>
          }

          {/* Content */}
          <div className='my-4' dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>
      </MaxWidthWrapper >
    )
  }
}

export default ReadSingleBlog
