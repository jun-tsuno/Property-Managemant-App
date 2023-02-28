import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const deleteTenant = async (
	userId: string,
	houseId: string,
	tenantId: string
) => {
	await deleteDoc(
		doc(db, `rent-manager/${userId}/house/${houseId}/tenants/${tenantId}`)
	);
	return;
};

export default deleteTenant;
