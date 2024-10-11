const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const randomHostColors = ["#FAEDCB", "#FEC5BB", "#bcbee8"];

function daysBetween(date1: Date, date2: Date): number {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1.getTime() - date2.getTime());

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);
}


export function ClubDates() {
	var PLACEHOLDER_upcoming_dates = [

	{
		"date": new Date('October 31, 2024 17:00:00'),
			"events": [
			{
				"host": "Halloween Club",
				"description": "A spooky event where placeholder items will be discussed"
			},
			{
				"host": "Candy Club",
				"description": "Discuss with candy manufacturers regarding increased candy demand"
			},
			{
				"host": "Costume Contest Committee",
				"description": "Placeholder costume contest for scariest outfit"
			}
			]
	},
	{
		"date": new Date('November 28, 2024 17:00:00'),
		"events": [
		{
			"host": "Thanksgiving Feast Committee",
			"description": "A feast of placeholder topics and gratitude"
		}
		]
	},
	{
		"date": new Date('December 25, 2024 18:00:00'),
		"events": [
		{
			"host": "Christmas Gift Exchange",
			"description": "A merry time to unwrap placeholder gifts"
		},
		{
			"host": "Holiday Choir",
			"description": "Singing placeholder carols for holiday cheer"
		},
		{
			"host": "Secret Santa Group",
			"description": "Placeholder Secret Santa exchange"
		},
		{
			"host": "Winter Wonderland Club",
			"description": "Planning for a placeholder winter festival"
		}
		]
	},
	{
		"date": new Date('January 1, 2025 18:00:00'),
		"events": [
		{
			"host": "New Year's Countdown",
			"description": "Celebrating the start of a new placeholder year"
		},
		{
			"host": "Resolution Club",
			"description": "A meeting to discuss placeholder resolutions for the year"
		},
		{
			"host": "Fireworks Display",
			"description": "Placeholder fireworks to ring in the new year"
		}
		]
	},
	{
		"date": new Date('February 14, 2025 16:00:00'),
		"events": [
		{
			"host": "Valentine's Exchange",
			"description": "A day to exchange placeholder love and affection"
		},
		{
			"host": "Couples Dinner Club",
			"description": "A placeholder romantic dinner event"
		}
		]
	},
	{
		"date": new Date('March 17, 2025 17:00:00'),
		"events": [
		{
			"host": "Green Parade Committee",
			"description": "A placeholder celebration of all things green and lucky"
		},
		{
			"host": "Luck Discussion Panel",
			"description": "Debating the merits of placeholder luck"
		},
		{
			"host": "Irish Dance Group",
			"description": "Performances of placeholder traditional Irish dance"
		}
		]
	},
	{
		"date": new Date('April 1, 2025 16:00:00'),
		"events": [
		{
			"host": "Pranksters' Club",
			"description": "A day filled with placeholder pranks and surprises"
		},
		{
			"host": "Comedy Night",
			"description": "A placeholder stand-up comedy event for laughs"
		}
		]
	},
	{
		"date": new Date('July 4, 2025 18:00:00'),
		"events": [
		{
			"host": "Fireworks Committee",
			"description": "A placeholder celebration of freedom with fireworks"
		},
		{
			"host": "Freedom Talk",
			"description": "Discussing placeholder freedom throughout history"
		},
		{
			"host": "Parade Group",
			"description": "Placeholder patriotic parade"
		},
		{
			"host": "Cookout Team",
			"description": "Hosting a placeholder Independence Day cookout"
		},
		{
			"host": "Music Festival Organizers",
			"description": "A placeholder music festival celebrating freedom"
		}
		]
	}
	];


	const dateCards = PLACEHOLDER_upcoming_dates.map((item, index) => (

				<div key={index} className="min-w-[20em] p-4 relative rounded border border-black m-2">


				<div className="top-[-2.5rem] z-[3] left-0 right-0 m whitespace-nowrap m-inline text-center absolute"><span className="text-thin bg-white px-2">{daysBetween(item.date, new Date())} days</span></div>
				<div className="top-[-1.8rem] z-[2] left-0 right-0 m whitespace-nowrap m-inline w-[100%] border-t border-t-black absolute pl-[22rem]"></div>


				<h3 className="mr-auto my-1 ml-2">
				{item.date.toLocaleString('default', { month: "long" })}, {item.date.getFullYear()}
				</h3>
				<h3 className="my-1 mr-auto text-3xl ml-2 font-medium">
				{days[item.date.getDay()].substring(0, 3)} {item.date.getDate()} <span className="font-mono ">@</span> {item.date.getHours()}:{(item.date.getMinutes() < 10 ? '0' : '') + item.date.getMinutes()}
				</h3>

				{/* Mapping through events within the card */}
				{item.events.map((eventItem, eventIndex) => (
							<div key={eventIndex} className="border relative overflow-hidden border-black my-4 rounded bg-gray-50">
							<div  className="px-2 py-1 " style={{backgroundColor: `${randomHostColors[Math.floor(Math.random()*randomHostColors.length)]}`}}>
							<h4 className="font-semibold">{eventItem.host}</h4>
							</div>
							<div className="px-2 py-1">
							{eventItem.description}
							</div>






							</div>
							))}
<a target="_blank" className="absolute hover:underline text-thin text-xs bottom-0 m-2" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NWRiMTNkbjlrNW9yZGU4Y3Q4MTY2aTYwNGcgemFuZWtnMTIzQG0&amp;tmsrc=zanekg123%40gmail.com">Open in Google Calendar</a>
				</div>
					));

				return (
						<>
						<div className="">
						<div className="flex items-center">
						<h2 className="px-12 my-4 text-5xl">Upcoming Meetings</h2>
						<div className="ml-auto">
						</div>
						</div>
						<div className="relative ">
						<div className="flex pr-6 pl-12 pb-4 pt-12 w-full relative overflow-x-auto">
						{dateCards}

						</div>
						</div>


						</div>
						</>
				       );
}

