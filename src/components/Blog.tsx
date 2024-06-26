import Link from "next/link";
import React from "react";

interface InputProps {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: Date;
  readTime: number;
}

const Blog: React.FC<InputProps> = ({
  id,
  slug,
  title,
  content,
  date,
  readTime,
}) => {
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
  return (
    <div
      key={id}
      className="w-full rounded-sm mt-4 p-3 bg-secondary flex flex-col"
    >
      <div className="flex flex-row items-end justify-between border-b-[1px] pb-1 border-accent-background">
        <div>
          <h5 className="font-light text-[0.8rem] lg:text-[0.8rem] text-foreground mb-[1px]">
            {days[date.getDay()]} - {date.getDate()} {months[date.getMonth()]},{" "}
            {date.getFullYear()}
          </h5>
          <Link
            href={"read/" + slug}
            className="font-bold text-lg lg:text-xl 2xl:text-2xl hover:underline"
          >
            {title}
          </Link>
        </div>
        <div>
          <h5 className="text-[0.8rem] text-foreground font-light lg:font-bold">
            {readTime} MIN READ
          </h5>
        </div>
      </div>

      <div>
        <p className="text-sm text-justify mt-2" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Blog;
