"use client";
import {
	doc,
	getDocs,
	query,
	collection,
	DocumentData,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";

interface IProps {
	params: { houseId: string };
}

const HouseDetail = ({ params: { houseId } }: IProps) => {
	const { user } = useAuth();
	const [tenants, setTenants] = useState<DocumentData[]>([]);

	useEffect(() => {
		const fetchTenants = async (
			houseId: string,
			userId: string | undefined
		) => {
			let dbTenants: DocumentData[] = [];
			const q = query(
				collection(db, `rent-manager/${userId}/house/${houseId}/tenants`)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				dbTenants.push(doc.data());
			});
			setTenants(dbTenants);
		};
		fetchTenants(houseId, user?.uid);
	}, [user]);

	console.log(tenants);

	return <div>house detail</div>;
};

export default HouseDetail;
