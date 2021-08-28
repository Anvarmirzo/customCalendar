import { RowInCellProps } from '../interfaces/RowInCell.props';

export const RowInCellStyled: React.FC<RowInCellProps> = ({
	className,
	children,
}) => {
	return <p className={className}>{children}</p>;
};
