"use client";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import fetchTenantInfo from "../../../../firebase/firestore/fetchTenantInfo";
import useAuth from "@/hooks/useAuth";

interface IProps {
	params: { tenantId: string; houseId: string };
}

const TenantPage = ({ params: { tenantId, houseId } }: IProps) => {
	const { user } = useAuth();
	const [tenantData, setTenantData] = useState<DocumentData>();

	useEffect(() => {
		const getTenantData = async () => {
			const returnedData = await fetchTenantInfo(user?.uid, houseId, tenantId);
			setTenantData(returnedData);
		};
		getTenantData();
	}, [user]);

	return (
		<div className="bg-slate-200 drop-shadow-lg w-[90%] mx-auto rounded-2xl px-5 py-10">
			<h2 className="text-center">{tenantData?.tenantName}</h2>
			<div className="w-[80%] mx-auto">
				<p>Room: {tenantData?.roomId}</p>
				<p>Tel: {tenantData?.phone}</p>
				<p>Contact: {tenantData?.eMail}</p>
			</div>
			<div className="bg-white rounded-xl py-5 px-14 mt-20">
				<p>
					<span className="font-bold">From:</span> {tenantData?.startDate}
				</p>
				<p className="mt-5">
					<span className="font-bold">To:</span> {tenantData?.endDate}
				</p>
				<p className="mt-5">
					<span className="font-bold">Rent(month):</span> ${tenantData?.rentFee}
				</p>
			</div>
		</div>
	);
};

export default TenantPage;
