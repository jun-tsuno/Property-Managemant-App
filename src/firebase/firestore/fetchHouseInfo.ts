import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const fetchHouseInfo = async (userId: string | undefined, houseId: string) => {
	const docSnap = await getDoc(
		doc(db, `rent-manager/${userId}/house/${houseId}`)
	);

	if (docSnap.exists()) {
		return docSnap.data();
	}
};

export default fetchHouseInfo;
