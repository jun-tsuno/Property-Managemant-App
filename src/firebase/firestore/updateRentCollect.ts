import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const updateRentCollect = async (
  isCollected: boolean,
  userId: string | undefined,
  houseId: string,
  tenantId: string
) => {
  userId === undefined
    ? ''
    : await updateDoc(doc(db, `rent-manager/${userId}/house/${houseId}/tenants/${tenantId}`), {
        rentCollected: isCollected
      });
};

export default updateRentCollect;
