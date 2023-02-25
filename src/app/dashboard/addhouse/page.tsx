"use client";
import { useState } from "react";
import Input from "@/components/Input";
// import useHouseAdd from "@/hooks/useHouseAdd";

const AddHousePage = () => {
	const [houseName, setHouseName] = useState("");
	const [houseLocation, setHouseLocation] = useState("");

	const handleNameChange = (term: string) => {
		setHouseName(term);
	};

	const handleLocationChange = (term: string) => {
		setHouseLocation(term);
	};

	console.log(`hosueName: ${houseName}`);
	console.log(`locationName: ${houseLocation}`);

	return (
		<>
			<div>Add a new house</div>
			<div>
				<Input
					label={{ labelName: "House", placeholder: "house" }}
					value={{ houseName: houseName, houseLocation: houseLocation }}
					handleChange={{
						nameChange: handleNameChange,
						locationChange: handleLocationChange,
					}}
				/>
				<Input
					label={{ labelName: "Location", placeholder: "location" }}
					value={{ houseName: houseName, houseLocation: houseLocation }}
					handleChange={{
						nameChange: handleNameChange,
						locationChange: handleLocationChange,
					}}
				/>
			</div>
		</>
	);
};

export default AddHousePage;
