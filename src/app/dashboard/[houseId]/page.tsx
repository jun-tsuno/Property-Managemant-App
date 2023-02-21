"use client";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import useAuth from "@/hooks/useAuth";
import NameCard from "@/components/NameCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import fetchHouseInfo from "@/firebase/firestore/fetchHouseInfo";
import fetchTenants from "@/firebase/firestore/fetchTenants";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Link from "next/link";

interface IProps {
	params: { houseId: string };
}

const HouseDetailPage = ({ params: { houseId } }: IProps) => {
	const { user } = useAuth();
	const [tenants, setTenants] = useState<DocumentData[]>([]);
	const [houseInfo, setHouseInfo] = useState<DocumentData | undefined>({
		houseId: "",
		houseName: "",
		location: "",
	});

	useEffect(() => {
		const getHouseData = async () => {
			const returnedData = await fetchHouseInfo(user?.uid, houseId);
			setHouseInfo(returnedData);
		};

		const getTenantsData = async () => {
			const returnedData = await fetchTenants(houseId, user?.uid);
			setTenants(returnedData);
		};

		getHouseData();
		getTenantsData();
	}, [user]);

	return (
		<>
			<Link href={"/dashboard"}>
				<div className="inline-block ml-20">
					<ArrowCircleLeftIcon
						sx={{
							color: "#0EA5E9",
							fontSize: "50px",
							"&:hover": { scale: "105%", cursor: "pointer" },
						}}
					/>
					DashBoard
				</div>
			</Link>
			<div className="pt-5 pb-10 max-w-2xl mx-auto">
				<div className="w-[80%] text-center bg-white drop-shadow-xl py-4 rounded-2xl mx-auto">
					<h1>{houseInfo?.houseName}</h1>
					<p className="align-middle pt-2">
						<span className="pr-1 text-zinc-500">
							<LocationOnIcon />
						</span>
						{houseInfo?.location}
					</p>
				</div>
				<div className="w-[80%] mx-auto py-20">
					<h2>
						<span className="pr-2">
							<PeopleAltIcon />
						</span>
						Rentees
					</h2>
					<ul>
						{tenants.map((tenant) => {
							return (
								<NameCard
									key={tenant.tenantId}
									houseId={houseId}
									tenant={tenant}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default HouseDetailPage;
