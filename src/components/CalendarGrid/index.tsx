import React from 'react';
import moment from 'moment';
import {
	GridWrapper,
	CellWrapper,
	DayWrapper,
	RowInCell,
	WeekItem,
	WeekWrapper,
} from './../../styles/global';

export function CalendarGrid({ startDay, today }: any) {
	const totalDays: number = 42;
	const day = startDay.clone().subtract(1, 'day');
	const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

	const isCurrentDay = (day: moment.Moment) => moment().isSame(day, 'day');
	const isSelectedMonth = (day: moment.Moment): boolean =>
		today.isSame(day, 'month');

	return (
		<>
			<WeekWrapper>
				{[...Array(7)].map((weekDay, index) => (
					<WeekItem isHeader isWeekend={index === 5 || index === 6} key={index}>
						{moment()
							.day(index + 1)
							.format('ddd')}
					</WeekItem>
				))}
			</WeekWrapper>
			<GridWrapper>
				{daysArray.map((day) => (
					<CellWrapper
						isWeekend={day.day() === 6 || day.day() === 0}
						key={`${day.unix()}`}
						isSelectedMonth={isSelectedMonth(day)}
					>
						<RowInCell justifyEnd>
							<DayWrapper currentDay={isCurrentDay(day)}>
								{day.format('D')}
							</DayWrapper>
						</RowInCell>
					</CellWrapper>
				))}
			</GridWrapper>
		</>
	);
}
