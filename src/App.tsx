import React, { useState } from 'react';
import { Title, Monitor, CalendarGrid } from './components';
import moment from 'moment';
import { CalendarWrapper } from './styles/global';

function App() {
	moment.updateLocale('en', { week: { dow: 1 } });
	const [today, setToday] = useState(moment());
	const startDay = today.clone().startOf('month').startOf('week');

	const prevHandler = () =>
		setToday((prev) => prev.clone().subtract(1, 'month'));
	const todayHandler = () => setToday(moment());
	const nextHandler = () => setToday((prev) => prev.clone().add(1, 'month'));

	return (
		<CalendarWrapper>
			<Title />
			<Monitor
				today={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
			<CalendarGrid startDay={startDay} today={today} />
		</CalendarWrapper>
	);
}

export default App;
