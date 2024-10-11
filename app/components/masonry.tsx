interface Item {
title: string;
description: string;
}

interface MasonryProps {
items: Item[];
columns: number;
}

export function Masonry({ items, columns }: MasonryProps) {
	// Create an array to hold items for each column
	const columnItems: Item[][] = Array.from({ length: columns }, () => []);

	// Distribute items across columns
	items.forEach((item, index) => {
			const columnIndex = index % columns;
			columnItems[columnIndex].push(item);
			});

	return (
			<div className="flex ">
			{columnItems.map((column, colIndex) => (
						<div key={colIndex} className="flex-1">
						{column.map((item, itemIndex) => (
									<div key={itemIndex} className="">
									<h3 className="font-medium text-2xl leading-tight border b-[1px] dark:b-white border-[black]">{item.title}</h3>
									</div>
									))}
						</div>
						))}
			</div>
	       );
}

