import React, { useEffect, useState } from 'react';
import { Title, Monitor, CalendarGrid } from './components';
import moment from 'moment';
import { CalendarWrapper } from './styles/global';

const URL = 'http://localhost:3333';
const totalDays = 42;

function App() {
	const [events, setEvents] = useState([]);
	const [today, setToday] = useState(moment());

	moment.updateLocale('en', { week: { dow: 1 } });
	const startDay = today.clone().startOf('month').startOf('week');
	const startDateQuery = startDay.clone().format('X');
	const endDateQuery = startDay.clone().add(totalDays, 'days');

	const prevHandler = () =>
		setToday((prev) => prev.clone().subtract(1, 'month'));
	const todayHandler = () => setToday(moment());
	const nextHandler = () => setToday((prev) => prev.clone().add(1, 'month'));

	useEffect(() => {
		fetch(`${URL}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);
	console.log(events);
	return (
		<CalendarWrapper>
			<Title />
			<Monitor
				today={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
			<CalendarGrid startDay={startDay} today={today} totalDays={totalDays} />
		</CalendarWrapper>
	);
}

export default App;
