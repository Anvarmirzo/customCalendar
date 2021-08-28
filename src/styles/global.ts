import styled from 'styled-components';
import { RowInCellStyled } from '../helpers/RowInCellStyled';
import { CellWrapperStyled } from '../helpers/CellWrapperStyled';
import { DayWrapperStyled } from './../helpers/DayWrapperStyled';
import { WeekItemStyled } from '../helpers/WeekItemStyled';

export const CalendarWrapper = styled.div`
	border: 1px solid #464648;
	border-top-color: #737374;
	border-bottom-width: 2px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
	background-color: #1e1f21;
`;

export const DivWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	background-color: #1e1f21;
	color: #dcdddd;
`;

export const WeekWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	background-color: #1e1f21;
`;

export const WeekItem = styled(WeekItemStyled)`
	min-width: 148px;
	min-height: ${(props) => (props.isHeader ? '24px' : ' 80px')};
	color: ${(props) => (props.isWeekend ? '#dddcdd90' : '#DDDDDD')};
	text-align: right;
	padding-right: 7px;
`;

export const CalendarTitle = styled.h1``;

export const ArrowButton = styled.button`
	border: unset;
	background-color: #565759;
	height: 20px;
	margin-right: 2px;
	border-radius: 4px;
	color: #e6e6e6;
`;

export const TodayButton = styled(ArrowButton)`
	padding-right: 16px;
	padding-left: 16px;
	font-weight: bold;
`;

export const GridWrapper = styled.main`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-gap: 1px;
	background-color: #404040;
`;

export const CellWrapper = styled(CellWrapperStyled)`
	min-width: 148px;
	min-height: 80px;
	background-color: ${(props) => (props.isWeekend ? '#272829' : '#1e1f21')};
	color: ${(props) => (props.isSelectedMonth ? '#dddcdd' : '#dddcdd90 ')};
`;

export const RowInCell = styled(RowInCellStyled)`
	display: flex;
	justify-content: ${(props) => (props.justifyEnd ? 'flex-end' : 'flex-start')};
`;

export const DayWrapper = styled(DayWrapperStyled)`
	height: 33px;
	width: 33px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.currentDay ? 'red' : 'transparent')};
	color: ${(props) => (props.currentDay ? 'black' : 'currentColor')};
	font-weight: ${(props) => (props.currentDay ? '700' : '400')};
`;
