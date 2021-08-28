import { WeekItemProps } from '../interfaces/WeekItem.props';

export const WeekItemStyled: React.FC<WeekItemProps> = ({
	className,
	children,
}) => {
	return <li className={className}>{children}</li>;
};
