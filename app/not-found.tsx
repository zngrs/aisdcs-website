"use client"
import { useState, useEffect, useRef } from 'react';

export default function TerminalGrid() {
	const [charCount, setCharCount] = useState(0);
	const testElementRef = useRef<HTMLSpanElement | null>(null);
	function row() {

		const chars = [];
		for (var i = 0; i < charCount; i++) {
			chars.push("a");
		}
		console.log(chars.length)
		return chars;
	}

	useEffect(() => {
			const calculateCharCount = () => {
			if (testElementRef.current) {
			const charWidth = testElementRef.current.offsetWidth; // Get the width of one character
			const screenWidth = window.innerWidth; // Get screen width
			const charsPerRow = Math.floor(1 * screenWidth / charWidth); // Calculate how many fit
			setCharCount(charsPerRow);
			console.log(charsPerRow);
			}
			};

			calculateCharCount(); // Run the calculation on component mount

			window.addEventListener('resize', calculateCharCount); // Update on window resize
			return () => window.removeEventListener('resize', calculateCharCount); // Cleanup listener
			}, []);

	return (
			<>
			{/* Test element to measure width of a single character */}
			<span ref={testElementRef} className="invisible absolute z-[-1] font-mono">M</span>

			<div className="w-full h-screen flex justify-between bg-black text-green-500 font-mono">
			{/* Display the number of characters per row */}
			{row().map((alp) => 
					<div>{alp}</div>
				  )

			}
			{/* Render a row of characters based on charCount */}
			<div>
			</div>
			</div>
			</>
	       );
}

