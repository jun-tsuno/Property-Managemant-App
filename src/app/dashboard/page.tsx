"use client";
import { useState, useEffect } from "react";
import HouseCard from "@/components/HouseCard";
import useAuth from "@/hooks/useAuth";
import { db } from "@/config/firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import AddHomeIcon from "@mui/icons-material/AddHome";

const DashBoardPage = () => {
	const { user } = useAuth();
	const [houses, setHouses] = useState<DocumentData[]>([]);

	useEffect(() => {
		const fetchHouse = async () => {
			let dbHouses: DocumentData[] = [];
			const q = query(collection(db, `rent-manager/${user?.uid}/house`));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				dbHouses.push(doc.data());
			});
			setHouses(dbHouses);
		};
		fetchHouse();
	}, [user]);

	return (
		<>
			<h2>
				Welcome Back, <span className="font-bold">{`${user?.email}`}</span>
			</h2>
			<section>
				<h3>Your House</h3>
				<div className="flex flex-wrap">
					{houses.length > 0 &&
						houses.map((house) => {
							return <HouseCard key={house.houseName} house={house} />;
						})}
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
				</div>
			</section>
		</>
	);
};

export default DashBoardPage;
