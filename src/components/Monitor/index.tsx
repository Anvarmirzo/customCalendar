import React from 'react';
import { MonitorProps } from '../../interfaces/Monitor.props';
import {
	ArrowButton,
	CalendarTitle,
	DivWrapper,
	TodayButton,
} from './../../styles/global';

export function Monitor({
	today,
	prevHandler,
	todayHandler,
	nextHandler,
}: MonitorProps) {
	return (
		<DivWrapper>
			<CalendarTitle>
				{today.format('MMMM')} <span>{today.format('YYYY')}</span>
			</CalendarTitle>
			<div>
				<ArrowButton onClick={prevHandler} type='button'>
					&lt;
				</ArrowButton>
				<TodayButton onClick={todayHandler} type='button'>
					Today
				</TodayButton>
				<ArrowButton onClick={nextHandler} type='button'>
					&gt;
				</ArrowButton>
			</div>
		</DivWrapper>
	);
}
