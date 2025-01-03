import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BanIcon, Trash2 } from "lucide-react";

interface InputProps {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: Date;
  readTime: number;
  onClick?: any
}

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

const Blog: React.FC<InputProps> = ({
  id,
  slug,
  title,
  content,
  date,
  readTime,
}) => {



  if (content.split(' ').length >= 32) {
    content = content.split(' ').slice(0, 32).join(' ')
  }

  return (
    <div
      key={id}
      className="w-full rounded-sm mt-4 p-3 bg-secondary flex flex-col transition ease-in-out duration-700"
    >
      <div className="flex flex-row items-end justify-between border-b-[1px] pb-1 border-accent-background">
        <div>
          <h5 className="font-light text-[0.8rem] lg:text-[0.8rem] text-foreground mb-[1px]">
            {days[date.getDay()]} - {date.getDate()} {months[date.getMonth()]},{" "}
            {date.getFullYear()}
          </h5>
          <Link
            href={"read/" + decodeURI(slug)}
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
        <div className="text-sm text-justify mt-2" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};


const SimpleBlog: React.FC<InputProps> = ({
  id,
  slug,
  title,
  content,
  date,
  readTime,
  onClick
}) => {

  return (
    <div key={id} className="w-full rounded-sm mt-4 p-2 border border-emerald-500 flex flex-row items-center justify-center gap-2" >
      <div className="w-full rounded-sm p-2 flex flex-col">
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
      <div className="flex gap-2 flex-col h-full justify-between">

        <Button variant="ghost" className="hover:bg-red-500 hover:text-white" onClick={onClick}>
          <Trash2 />
        </Button>

        <Button variant="ghost">
          <BanIcon />
        </Button>
      </div>
    </div>
  );
};

export {
  Blog,
  SimpleBlog,
}