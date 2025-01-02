"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { setTheme } = useTheme();

  const handleTheme = () => {
    if (darkTheme) {
      setTheme("light");
      setDarkTheme(false);
    } else {
      setTheme("dark");
      setDarkTheme(true);
    }
  };

  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between items-center border-0 border-b-[1px] border-foreground pt-2 pb-1">
        <div>
          <Link href="/">
            <h1 className="font-bold text-lg">the blogsmic</h1>
          </Link>
        </div>
        <div className="flex gap-1">
          <Button variant="outline">
            <Link href="/scratch"> + new</Link>
          </Button>
          <Button variant="outline">
            <Link href="/blogs">read</Link>
          </Button>
          {/* <Toggle
            aria-label="Toggle Theme"
            onPressedChange={() => handleTheme()}
            className="rounded-sm p-0"
          >
            {darkTheme ? <Sun className=" h-4" /> : <Moon className=" h-4" />}
          </Toggle> */}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
