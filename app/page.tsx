"use client"
import Image from "next/image";
import { useEffect } from 'react';
import { Nav } from "./components/nav"
import { Hero } from "./components/hero"
import { Footer } from "./components/footer"
import { ClubCards } from "./components/clubcards"
import { ClubDates } from "./components/clubdates"


export default function Home() {
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
	return (
			<>
			<Nav/>

			<Hero/>

			<ClubCards/>
			<ClubDates/>
			<Footer/>
			</>
	       );
}
