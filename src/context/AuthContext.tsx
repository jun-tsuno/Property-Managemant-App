"use client";
import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { AuthType } from "@/types/types";

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthContextProvider = ({ children }: any): JSX.Element => {
	const [user, setUser] = useState(null);

	const signIn = async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password);
	};

	return (
		<AuthContext.Provider value={{ user, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};
