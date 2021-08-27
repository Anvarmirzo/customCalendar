import React from 'react';
import { Header, Monitor, CalendarGrid } from './components';

import moment from 'moment';
function App() {
	moment.updateLocale('en', { week: { dow: 1 } });
	const startDay = moment().startOf('month').startOf('week');
	const endDay = moment().endOf('month').endOf('week');

	console.log('startDay - ', startDay.format('YYYY-MM-DD'));
	console.log('endDay - ', endDay.format('YYYY-MM-DD'));

	const calendar = [];
	const day = startDay.clone();

	while (!day.isAfter(endDay)) {
		calendar.push(day.clone());
		day.add(1, 'day');
	}
	console.log(calendar);

	return (
		<div className='App'>
			<Header />
			<Monitor />
			<CalendarGrid />
		</div>
	);
}

export default App;
