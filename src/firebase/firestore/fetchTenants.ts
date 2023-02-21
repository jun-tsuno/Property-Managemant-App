import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const fetchTenants = async (houseId: string, userId: string | undefined) => {
	let dbTenants: DocumentData[] = [];
	const q = query(
		collection(db, `rent-manager/${userId}/house/${houseId}/tenants`)
	);
	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		dbTenants.push(doc.data());
	});
	return dbTenants;
};

export default fetchTenants;
