interface IProps {
	label: { labelName: string; placeholder: string };
	value: string | number;
	inputType?: string;
	handleChange(term: string | number): void;
}

const Input = ({ label, value, inputType, handleChange }: IProps) => {
	const { labelName, placeholder } = label;

	return (
		<>
			<label
				className="text-lg font-semibold inline-block mb-2 text-primaryDark"
				htmlFor={label.labelName}
			>
				{labelName}
			</label>
			<input
				id={label.labelName}
				placeholder={placeholder}
				value={value}
				type={inputType}
				min="0"
				onChange={(e) => handleChange(e.target.value)}
				autoComplete="off"
				className="block w-full p-3 drop-shadow-lg rounded-md"
			/>
		</>
	);
};

export default Input;
