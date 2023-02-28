import MyButton from "@/components/MyButton";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";

interface IProps {
	tenantData: DocumentData;
	houseId: string;
}

const NameCard = ({ tenantData, houseId }: IProps) => {
	return (
		<div className="text-center py-3 my-3 bg-white drop-shadow-lg rounded-2xl flex items-center">
			<p className="pl-5">{tenantData.tenantName}</p>
			<div className="w-20 ml-auto mr-5">
				<Link href={`/dashboard/${houseId}/${tenantData.tenantId}`}>
					<MyButton primary>Detail</MyButton>
				</Link>
			</div>
		</div>
	);
};

export default NameCard;
