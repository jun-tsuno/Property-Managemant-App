"use client";
import { FormEvent, useState } from "react";
import Input from "@/components/Input";
import MyButton from "@/components/MyButton";
import addHouse from "@/firebase/firestore/addHouse";
import useAuth from "@/hooks/useAuth";
import { v4 as uuidv4 } from "uuid";
import { HouseType } from "@/types/types";

const AddHousePage = () => {
	const [houseName, setHouseName] = useState("");
	const [houseLocation, setHouseLocation] = useState("");
	const { user } = useAuth();

	const handleNameChange = (term: string) => {
		setHouseName(term);
	};

	const handleLocationChange = (term: string) => {
		setHouseLocation(term);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const houseId = uuidv4();
		const houseData: HouseType = {
			houseId: houseId,
			houseName: houseName,
			location: houseLocation,
		};

		await addHouse(user!.uid, houseId, houseData);
	};

	return (
		<>
			<div>Add a new house</div>
			<form onSubmit={handleSubmit}>
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
					<MyButton primary type="submit">
						Add
					</MyButton>
				</div>
			</form>
		</>
	);
};

export default AddHousePage;
