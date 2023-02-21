"use client";
import { createContext, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { AuthType } from "@/types/types";

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthContextProvider = ({ children }: any): JSX.Element => {
	const [user, setUser] = useState<User | null>(null);

	onAuthStateChanged(auth, (currUser) => {
		if (currUser) {
			setUser(currUser);
		} else {
			// console.log("no user");
		}
	});

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
