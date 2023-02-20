import { UserCredential, User } from "firebase/auth";

export interface AuthType {
	user: User | null;
	logIn(email: string, password: string): Promise<UserCredential>;
	logOut(): Promise<void>;
}
