'use client'
import React, { useState } from 'react';
import { Icons } from '@/components/ui/icon';

export function Nav() {
  const [routeDisplay, setRouteDisplay] = useState("an-example-dir");

  return (
    <div className="z-[4] text-lg sm:text-xl bg-white border-b border-black sticky top-0 w-full  px-12 sm:p-6 md:px-12 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-[#EC4301] font-bold">
          Allen Computer Science
        </a>
        <span className="hidden sm:inline"></span>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#" className="transition-colors hover:text-[#04508a]">
          Clubs
        </a>
        <a href="#" className="transition-colors hover:text-primary-foreground">
          Contribute
        </a>
        <a href="#" className="transition-colors hover:text-primary-foreground">
          About
        </a>
      </div>

      <div className="ml-auto text-sm w-6 h-6">
        <Icons.gitHub />
      </div>
    </div>
  );
}

