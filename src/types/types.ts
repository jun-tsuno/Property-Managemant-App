import { User } from "firebase/auth";

export interface AuthType {
	user: User | null;
}

export interface HouseAddType {
	houseProfile: {
		houseId: string;
		houseName: string;
		location: string;
	};
	setHouseProfile: React.Dispatch<
		React.SetStateAction<{
			houseId: string;
			houseName: string;
			location: string;
		}>
	>;
}
