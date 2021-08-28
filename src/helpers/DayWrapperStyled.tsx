import { DayWrapperProps } from '../interfaces/DayWrapper.props';

export const DayWrapperStyled: React.FC<DayWrapperProps> = ({
	className,
	children,
}) => {
	return <span className={className}>{children}</span>;
};
