import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const fetchTenantInfo = async (
	userId: string | undefined,
	houseId: string,
	tenantId: string
) => {
	const docSnap = await getDoc(
		doc(db, `rent-manager/${userId}/house/${houseId}/tenants`, `${tenantId}`)
	);

	if (docSnap.exists()) {
		return docSnap.data();
	}
};

export default fetchTenantInfo;
