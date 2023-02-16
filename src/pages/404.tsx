import "@/style/globals.css";
import { Padding } from "@mui/icons-material";
import Link from "next/link";
import { BiError } from "react-icons/bi";

const NotFoundPage = () => {
	return (
		<div className="text-center">
			<div className="text-5xl font-bold">
				<BiError style={{ verticalAlign: "middle", display: "inline-block" }} />
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
