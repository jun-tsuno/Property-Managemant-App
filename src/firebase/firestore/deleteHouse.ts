import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const deleteHouse = async (userId: string, houseId: string) => {
	await deleteDoc(doc(db, `rent-manager/${userId}/house/${houseId}`));
	return;
};

export default deleteHouse;
