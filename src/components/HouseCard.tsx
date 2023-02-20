import React from "react";

const HouseCard = () => {
	return (
		<div className="w-80 aspect-square rounded-2xl bg-[url('/image/house1.png')] bg-cover bg-center relative mx-auto hover:brightness-110 cursor-pointer hover:-translate-y-2 shadow-zinc-500 shadow-md">
			<p className="absolute bottom-0 right-1/2 translate-x-1/2 py-5 text-2xl bg-black/40 backdrop-blur-md w-full text-center text-white rounded-b-2xl">
				House1
			</p>
		</div>
	);
};

export default HouseCard;
