"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import MyButton from "@/components/MyButton";
import addHouse from "@/firebase/firestore/addHouse";
import useAuth from "@/hooks/useAuth";
import { v4 as uuidv4 } from "uuid";
import { HouseType } from "@/types/types";
import { ToastContainer } from "react-toastify";
import { successToast, errorToast } from "@/helpers/throwToast";
import BackButton from "@/components/BackButton";

const AddHousePage = () => {
	const [houseName, setHouseName] = useState("");
	const [houseLocation, setHouseLocation] = useState("");
	const { user } = useAuth();
	const router = useRouter();

	const handleNameChange = (term: string) => {
		setHouseName(term);
	};

	const handleLocationChange = (term: string) => {
		setHouseLocation(term);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!houseName || !houseLocation) {
			errorToast();
			return;
		}

		const houseId = uuidv4();
		const houseData: HouseType = {
			houseId: houseId,
			houseName: houseName,
			location: houseLocation,
		};

		try {
			await addHouse(user!.uid, houseId, houseData).then(() => {
				successToast();
				setHouseName("");
				setHouseLocation("");
			});
		} catch (error) {
			console.log(error);
			errorToast();
		}
	};

	return (
		<div className="w-[90%] mx-auto max-w-[600px]">
			<div className="ml-10">
				<BackButton onClick={() => router.back()}>{"< Home"}</BackButton>
			</div>
			<h1 className="text-center py-5 ">Add a New House</h1>
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
			<ToastContainer />
		</div>
	);
};

export default AddHousePage;
