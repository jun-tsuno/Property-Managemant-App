import { useContext } from "react";
import { HouseAddContext } from "@/context/HouseAddContext";

const useHouseAdd = () => {
	return useContext(HouseAddContext);
};

export default useHouseAdd;
