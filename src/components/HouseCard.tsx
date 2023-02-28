import Link from "next/link";
import { DocumentData } from "firebase/firestore";

interface IProps {
	house?: DocumentData;
}

const HouseCard = ({ house }: IProps) => {
	return (
		<div className="m-3 mx-auto">
			<Link href={`/dashboard/${house?.houseId}`}>
				<div className="w-80 aspect-square rounded-2xl bg-[url('/image/home.svg')] bg-contain bg-no-repeat relative hover:brightness-110 cursor-pointer hover:-translate-y-2 shadow-zinc-500 shadow-md">
					<div className="absolute bottom-0 right-1/2 translate-x-1/2 py-3 bg-black/40 backdrop-blur-md w-full text-center text-white rounded-b-2xl">
						<p className="text-2xl">{house?.houseName}</p>
						<p>{house?.location}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default HouseCard;
