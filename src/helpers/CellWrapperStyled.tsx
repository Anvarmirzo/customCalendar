import { CellWrapperProps } from '../interfaces/CellWrapper.props';

export const CellWrapperStyled: React.FC<CellWrapperProps> = ({
	className,
	children,
}) => {
	return <article className={className}>{children}</article>;
};
