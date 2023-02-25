import useHouseAdd from "@/hooks/useHouseAdd";

interface IProps {
	label: { labelName: string; placeholder: string };
	value: { houseName: string; houseLocation: string };
	handleChange: {
		nameChange(term: string): void;
		locationChange(term: string): void;
	};
}

const Input = ({ label, value, handleChange }: IProps) => {
	const { labelName, placeholder } = label;
	const { houseName, houseLocation } = value;
	const { nameChange, locationChange } = handleChange;

	let inputValue: string = "";
	let changeHandler: (term: string) => void = () => {};

	switch (labelName) {
		case "House":
			inputValue = houseName;
			changeHandler = nameChange;
			break;

		case "Location":
			inputValue = houseLocation;
			changeHandler = locationChange;
			break;
	}

	return (
		<>
			<label>{labelName}</label>
			<input
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => changeHandler(e.target.value)}
			/>
		</>
	);
};

export default Input;
