
/*
 *

 <h2 className="pl-2 text-4xl font-semibold">What's right for you?</h2>
 <div className="grid grid-cols-3 border-l border-t">
 {grid}
 </div>
 */

import SingleHeroCard  from "./clubinfo_singlecard"


export function ClubCards (){
	var clubItems = [
	{ 
title: "Data Science & Statistics", 
	       description: "Explore the world of data analysis, visualization, and statistical methods. Learn how data drives decisions in business, science, and everyday life through hands-on projects and competitions." 
	},
	{ 
title: "Cybersecurity", 
       description: "Dive into the world of digital security and learn about safeguarding information from cyber threats. Topics include encryption, ethical hacking, and network defense strategies." 
	},
	{ 
title: "RE-NEW", 
       description: "Dedicated to reducing electronic waste, this club refurbishes computers and donates them to underprivileged communities in the city of Allen, providing technology access for education and growth." 
	},
	{ 
title: "AI & Machine Learning", 
       description: "Delve into the rapidly growing field of artificial intelligence. Learn the fundamentals of machine learning algorithms and how AI is transforming industries through real-world applications and projects." 
	},
	{ 
title: "Computer Science Forum", 
       description: "The main club for all computer science enthusiasts. Join discussions, collaborative projects, and coding challenges to enhance your programming skills and explore new technologies." 
	},
	{ 
title: "Computer Science Tutors", 
       description: "Support your peers by offering tutoring sessions in various computer science subjects, from programming languages to algorithms, helping others succeed while strengthening your own knowledge." 
	},
	{ 
title: "Data Science & Statistics", 
       description: "Explore the world of data analysis, visualization, and statistical methods. Learn how data drives decisions in business, science, and everyday life through hands-on projects and competitions." 
	},
	{ 
title: "Computer Science Forum", 
       description: "The main club for all computer science enthusiasts. Join discussions, collaborative projects, and coding challenges to enhance your programming skills and explore new technologies." 
	},
	{ 
title: "RE-NEW", 
       description: "Dedicated to reducing electronic waste, this club refurbishes computers and donates them to underprivileged communities in the city of Allen, providing technology access for education and growth." 
	},
	{ 
title: "Cybersecurity", 
       description: "Dive into the world of digital security and learn about safeguarding information from cyber threats. Topics include encryption, ethical hacking, and network defense strategies." 
	},
	{ 
title: "Competitive Programming", 
       description: "Dive into the world of digital security and learn about safeguarding information from cyber threats. Topics include encryption, ethical hacking, and network defense strategies." 
	},


	];


	const grid = clubItems.map((item, index) => (
				/*
				   <div className="border-r border-b p-6">

				   <h3 className="font-light text-2xl border-b">{item.title}</h3>
				   <p className="font-bold leading-loose">{item.description}</p>
				   </div>
				   ));
				   */
				/*

		<div key={index} className="hover:bg-yellow-400 relative border-black ">
		<p className="cursor-pointer hover:text-[#172554] text-5xl font-bold mr-16  py-4 px-6 ">{item.title}</p>

		<div className="absolute flex items-center justify-center h-full mx-6 ml-auto right-0 top-0 text-5xl font-light">
		<p>+</p>
		</div>

		</div>
		*/

		<div key={index}>
		<SingleHeroCard title={item.title} description={item.description}/>
		</div>
		));

	return (<>

			<div className="p-6">
			<p className=" sm:text-2xl md:text-5xl text-xl font-light  py-4 px-6 ">Learn more about our offered clubs:</p>
			{grid}
			</div>
			</>);
}
