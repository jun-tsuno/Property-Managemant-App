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

	return <div>tenant</div>;
};

export default TenantPage;
