import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const updateRentCollect = async (isCollected: boolean, userId: string, houseId: string, tenantId: string) => {
  await updateDoc(doc(db, `rent-manager/${userId}/house/${houseId}/tenants/${tenantId}`), {
    rentCollect: isCollected
  });
};

export default updateRentCollect;
