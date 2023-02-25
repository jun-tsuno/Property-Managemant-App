import React from "react";

interface IProps {
	value: { name: string; placeholder: string };
}

const Input = ({ value }: IProps) => {
	const { name, placeholder } = value;
	return (
		<>
			<label>{name}</label>
			<input placeholder={placeholder} />
		</>
	);
};

export default Input;
