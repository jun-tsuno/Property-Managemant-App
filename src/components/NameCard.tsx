import MyButton from "@/components/MyButton";
interface IProps {
	name: string;
}

const NameCard = ({ name }: IProps) => {
	return (
		<div className="text-center py-3 my-3 bg-white drop-shadow-lg rounded-2xl flex items-center">
			<p className="pl-5">{name}</p>
			<div className="w-20 ml-auto mr-5">
				<MyButton primary>Detail</MyButton>
			</div>
		</div>
	);
};

export default NameCard;
