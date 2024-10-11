import { useState, useEffect, useRef } from "react";

interface CardData {
  title: string;
  description: string;
}

interface DescriptionData {
  description: string;
}

function Description(props: DescriptionData) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const currentHeight = ref.current.clientHeight;
      setHeight(currentHeight);
    }
  }, [ref.current]); // Dependency ensures it runs when ref changes

  return (
    <>
      <div ref={ref} className="relative pl-12">
        <p className="px-6 pr-16 leading-loose pt-4 font-thin text-3xl">
          {props.description}&nbsp;

	<a href="#" className="font-medium hover:underline">Learn More</a>
        </p>
        <div
          className="absolute mr-8 top-0 mt-auto left-0 w-[1px] bg-gray-500 mt-4"
          style={{ height: `${height}px` }}
        />
      </div>
    </>
  );
}

export default function SingleHeroCard(props: CardData) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded); // Toggle the state
  }

  return (
    <>
      <div className="relative border-black my-8">
        <button
          onClick={handleClick}
          className="w-full text-left sm:text-2xl md:text-5xl text-xl hover:bg-yellow-400 cursor-pointer hover:text-[#172554]  font-bold py-4 px-6 pl-12"
        >
          {props.title}
        </button>

        {isExpanded && <Description description={props.description} />}

        <div className="absolute my-4 flex items-center justify-center pointer-events-none h-fit-content px-6 ml-auto right-0 top-0 tsm:text-2xl md:text-5xl text-xl font-light">
          <p className="text-center font-mono">{isExpanded ? "-" : "+"}</p>
        </div>
      </div>
    </>
  );
}

