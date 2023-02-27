import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

const BackButton = ({ children, ...rest }: IProps) => {
	return (
		<button className="inline-block text-xl hover:text-customOrange" {...rest}>
			{children}
		</button>
	);
};

export default BackButton;
