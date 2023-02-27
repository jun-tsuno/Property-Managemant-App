import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { TenantType } from "@/types/types";

const addRentee = async (
	userId: string,
	houseId: string,
	tenantId: string,
	tenantData: TenantType
) => {
	await setDoc(
		doc(db, `rent-manager/${userId}/house/${houseId}/tenants/${tenantId}`),
		tenantData
	);
	return;
};

export default addRentee;
