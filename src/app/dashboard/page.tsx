"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import HouseCard from "@/components/HouseCard";
import AddHomeIcon from "@mui/icons-material/AddHome";

const DashBoardPage = () => {
	const { user } = useAuth();

	const userName = user?.email;

	return (
		<>
			<h2>
				Welcome Back, <span className="font-bold">{`${userName}`}</span>
			</h2>
			<section>
				<h3>Your House</h3>
				<HouseCard />
				<div className="my-5 w-80 aspect-square rounded-2xl mx-auto text-zinc-500 hover:text-orange-400 bg-zinc-300 cursor-pointer flex flex-col justify-center items-center">
					<div className="inline-block">
						<AddHomeIcon
							sx={{
								fontSize: "60px",
							}}
						/>
					</div>
					<h3>Add House</h3>
				</div>
			</section>
		</>
	);
};

export default DashBoardPage;
