import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { HouseType } from "@/types/types";

const addHouse = async (
	userId: string,
	houseId: string,
	houseData: HouseType
) => {
	await setDoc(doc(db, `rent-manager/${userId}/house/${houseId}`), houseData);
	return;
};

export default addHouse;
