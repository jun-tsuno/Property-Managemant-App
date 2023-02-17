import "@/style/globals.css";
import Link from "next/link";
import FmdBadIcon from "@mui/icons-material/FmdBad";

const NotFoundPage = () => {
	return (
		<div className="text-center my-20">
			<div className="text-5xl font-bold">
				<FmdBadIcon
					fontSize="large"
					style={{ verticalAlign: "middle", display: "inline-block" }}
				/>
				Page Not Found
			</div>
			<p>Please try again.</p>
			<Link href={"/"}>
				<p>{"< "}Back to Home</p>
			</Link>
		</div>
	);
};
export default NotFoundPage;
