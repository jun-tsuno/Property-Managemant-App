import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const LogOut = async () => {
	return await signOut(auth);
};

export default LogOut;
