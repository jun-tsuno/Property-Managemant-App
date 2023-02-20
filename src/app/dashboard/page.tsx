"use client";
import { useEffect } from "react";
import HouseCard from "@/components/HouseCard";
import useAuth from "@/hooks/useAuth";
import { db } from "@/config/firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import AddHomeIcon from "@mui/icons-material/AddHome";

const DashBoardPage = () => {
	const { user } = useAuth();

	let houseArr: DocumentData[] = [];

	const fetchHouse = async () => {
		const q = query(collection(db, `rent-manager/${user?.uid}/house`));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			houseArr.push(doc.data());
		});
		return houseArr;
	};
	fetchHouse();
	console.log(houseArr);

	return (
		<>
			<h2>
				Welcome Back, <span className="font-bold"></span>
			</h2>
			<section>
				<h3>Your House</h3>
				<HouseCard />
				<div className="my-5 w-80 aspect-square rounded-2xl mx-auto text-zinc-500 hover:text-orange-400 bg-zinc-300 cursor-pointer flex flex-col justify-center items-center">
					<div className="inline-block">
						<AddHomeIcon
							sx={{
								fontSize: "60px",
							}}
						/>
					</div>
					<h3>Add House</h3>
				</div>
			</section>
		</>
	);
};

export default DashBoardPage;
