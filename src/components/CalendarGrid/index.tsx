import React from 'react';
import { GridWrapper } from './../../styles/global';

export function CalendarGrid() {
	const totalDays: number = 42;
	const daysArray = [...Array(42)];

	return (
		<GridWrapper>
			{daysArray.map((day, index) => (
				<div key={`${day}_${index}`}>{index}</div>
			))}
		</GridWrapper>
	);
}
