import Header from "../components/Header";
import { Inter } from "@next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import { HouseAddContextProvider } from "@/context/HouseAddContext";
import "@/style/globals.css";

const inter = Inter({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<head />
			<body className="font-noto_sans font-medium bg-sky-50">
				<AuthContextProvider>
					<HouseAddContextProvider>
						<Header />
						<div className="my-20">{children}</div>
					</HouseAddContextProvider>
				</AuthContextProvider>
			</body>
		</html>
	);
}
