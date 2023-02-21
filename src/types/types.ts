import { UserCredential, User } from "firebase/auth";

export interface AuthType {
	user: User | null;
}
