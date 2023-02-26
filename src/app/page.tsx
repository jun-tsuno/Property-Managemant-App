import Image from "next/image";
import MyButton from "@/components/MyButton";
import Link from "next/link";

const HomePage = () => {
	return (
		<>
			<div className="mt-20 max-w-[1200px] flex flex-col md:flex-row-reverse md:justify-center">
				<div className="p-3 pr-7 text-center md:self-center">
					<h1 className="font-bold">Manage your Properties</h1>
					<p className="pt-1">Tenant & Property Management with this app.</p>
					<div className="py-5 w-36 mx-auto">
						<Link href={"/account/register"}>
							<MyButton primary>Get Started</MyButton>
						</Link>
					</div>
				</div>
				<div className="w-[80%] aspect-square mx-auto relative md:max-w-[550px] md:mx-0">
					<Image
						src={"/image/hero.png"}
						priority
						alt="hero-pic"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default HomePage;
