import Input from "@/components/Input";

const AddHousePage = () => {
	return (
		<>
			<div>Add a new house</div>
			<div>
				<Input value={{ name: "House", placeholder: "house" }} />
			</div>
		</>
	);
};

export default AddHousePage;
