import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LogIn = async (email: string, password: string) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
export default LogIn;
