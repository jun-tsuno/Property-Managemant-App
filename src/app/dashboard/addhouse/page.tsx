"use client";
import { useState } from "react";
import Input from "@/components/Input";
import MyButton from "@/components/MyButton";

const AddHousePage = () => {
	const [houseName, setHouseName] = useState("");
	const [houseLocation, setHouseLocation] = useState("");

	const handleNameChange = (term: string) => {
		setHouseName(term);
	};

	const handleLocationChange = (term: string) => {
		setHouseLocation(term);
	};

	return (
		<>
			<div>Add a new house</div>
			<div className="my-10 space-y-5 w-[90%] mx-auto">
				<div>
					<Input
						label={{ labelName: "House", placeholder: "house name..." }}
						value={houseName}
						handleChange={handleNameChange}
					/>
				</div>
				<div>
					<Input
						label={{ labelName: "Location", placeholder: "location..." }}
						value={houseLocation}
						handleChange={handleLocationChange}
					/>
				</div>
			</div>
			<div className="w-32 mx-auto">
				<MyButton primary>Add</MyButton>
			</div>
		</>
	);
};

export default AddHousePage;
