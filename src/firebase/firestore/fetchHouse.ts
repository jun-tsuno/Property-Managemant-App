import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { User } from "firebase/auth";

const fetchHouse = async (user: User | null) => {
	let dbHouses: DocumentData[] = [];
	const q = query(collection(db, `rent-manager/${user?.uid}/house`));
	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		dbHouses.push(doc.data());
	});
	return dbHouses;
};

export default fetchHouse;
