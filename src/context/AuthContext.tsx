"use client";
import { createContext, useState, useEffect } from "react";
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { AuthType } from "@/types/types";

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthContextProvider = ({ children }: any): JSX.Element => {
	const [user, setUser] = useState<User | null>(null);

	const logIn = async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = async () => {
		await signOut(auth);
		return setUser(null);
	};

	onAuthStateChanged(auth, (currUser) => {
		if (currUser) {
			setUser(currUser);
		} else {
			// console.log("no user");
		}
	});

	return (
		<AuthContext.Provider value={{ user, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};
