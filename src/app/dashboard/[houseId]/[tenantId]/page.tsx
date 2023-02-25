"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import fetchTenantInfo from "../../../../firebase/firestore/fetchTenantInfo";
import useAuth from "@/hooks/useAuth";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

interface IProps {
	params: { tenantId: string; houseId: string };
}

const TenantPage = ({ params: { tenantId, houseId } }: IProps) => {
	const { user } = useAuth();
	const router = useRouter();
	const [tenantData, setTenantData] = useState<DocumentData>();

	useEffect(() => {
		const getTenantData = async () => {
			const returnedData = await fetchTenantInfo(user?.uid, houseId, tenantId);
			setTenantData(returnedData);
		};
		getTenantData();
	}, [user]);

	return (
		<>
			<button className="inline-block ml-20" onClick={() => router.back()}>
				<ArrowCircleLeftIcon
					sx={{
						marginRight: "10px",
						color: "#0EA5E9",
						fontSize: "50px",
						"&:hover": { scale: "105%", cursor: "pointer" },
					}}
				/>
				Home Info
			</button>
			<div className="bg-slate-200 drop-shadow-lg w-[90%] max-w-[500px] mx-auto rounded-2xl px-5 py-10">
				<h2 className="text-center">{tenantData?.tenantName}</h2>
				<div className="w-[80%] mx-auto pt-10">
					<p>
						<span className="mr-2 italic font-bold text-slate">Room:</span>{" "}
						{tenantData?.roomId}
					</p>
					<p>
						<span className="mr-2 italic font-bold text-slate">Tel:</span>{" "}
						{tenantData?.phone}
					</p>
					<p>
						<span className="mr-2 italic font-bold text-slate">Contact:</span>{" "}
						{tenantData?.eMail}
					</p>
				</div>
				<div className="bg-white rounded-xl py-10 px-14 mt-14">
					<p>
						<span className="mr-2 italic font-bold text-slate">From:</span>{" "}
						{tenantData?.startDate}
					</p>
					<p className="mt-5">
						<span className="mr-2 italic font-bold text-slate">To:</span>{" "}
						{tenantData?.endDate}
					</p>
					<p className="mt-5">
						<span className="mr-2 italic font-bold text-slate">
							Rent(month):
						</span>{" "}
						${tenantData?.rentFee}
					</p>
				</div>
			</div>
		</>
	);
};

export default TenantPage;
