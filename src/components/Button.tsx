import React from "react";

interface IProps {
	children: string;
}

const Button = ({ children }: IProps) => {
	return (
		// <div className="p-0.5 rounded bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
		// 	<button className="px-6 py-2 text-blue-800 bg-white">Button</button>
		// </div>
		<button className="p-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-700">
			<div className="px-4 py-3 rounded hover:text-white bg-white hover:bg-gradient-to-r from-blue-500 to-blue-700 transition duration-300 ease-in-out">
				{children}
			</div>
		</button>
	);
};

export default Button;
