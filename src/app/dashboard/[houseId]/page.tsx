"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import useAuth from "@/hooks/useAuth";
import NameCard from "@/components/NameCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import fetchHouseInfo from "@/firebase/firestore/fetchHouseInfo";
import fetchTenants from "@/firebase/firestore/fetchTenants";
import BackButton from "@/components/BackButton";
import MyButton from "@/components/MyButton";
import Link from "next/link";
import MyDialog, { DialogProps } from "@/components/MyDialog";
import deleteHouse from "@/firebase/firestore/deleteHouse";

interface IProps {
	params: { houseId: string };
}

const HouseDetailPage = ({ params: { houseId } }: IProps) => {
	const { user } = useAuth();
	const router = useRouter();
	const [tenants, setTenants] = useState<DocumentData[]>([]);
	const [houseInfo, setHouseInfo] = useState<DocumentData | undefined>({
		houseId: "",
		houseName: "",
		location: "",
	});
	const [modalConfig, setModalConfig] = useState<DialogProps | undefined>();

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

	const handleDelete = async () => {
		const res = await new Promise<string>((resolve) => {
			setModalConfig({
				onClose: resolve,
				title: "Confirm",
				message: "Are you sure to remove this house from your database?",
			});
		});
		setModalConfig(undefined);

		if (res === "ok") {
			deleteHouse(user!.uid, houseId);
			router.push("/dashboard/");
		}
		return;
	};

	return (
		<>
			<div className="ml-10">
				<BackButton onClick={() => router.push("/dashboard")}>
					{"< Home"}
				</BackButton>
			</div>
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
									tenantData={tenant}
								/>
							);
						})}
					</ul>
					<div className="my-10 w-[60%] mx-auto">
						<Link href={`/dashboard/${houseId}/addRentee`}>
							<MyButton secondary>Add Rentee</MyButton>
						</Link>
					</div>
					<div className="my-5 w-[60%] mx-auto">
						<MyButton danger onClick={handleDelete}>
							Delete House
						</MyButton>
					</div>
				</div>
			</div>
			{modalConfig && <MyDialog {...modalConfig} />}
		</>
	);
};

export default HouseDetailPage;
