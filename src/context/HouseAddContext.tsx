"use client";
import { createContext, useState } from "react";
import { HouseAddType } from "@/types/types";

export const HouseAddContext = createContext<HouseAddType>({} as HouseAddType);

export const HouseAddContextProvider = ({ children }: any): JSX.Element => {
	const [houseProfile, setHouseProfile] = useState({
		houseId: "",
		houseName: "",
		location: "",
	});

	return (
		<HouseAddContext.Provider value={{ houseProfile, setHouseProfile }}>
			{children}
		</HouseAddContext.Provider>
	);
};
