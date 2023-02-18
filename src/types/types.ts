import { UserCredential } from "firebase/auth";

export interface AuthType {
	user: null;
	signIn(email: string, password: string): Promise<UserCredential>;
}
