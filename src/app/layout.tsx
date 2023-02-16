import Header from "../components/Header";
import "@/style/globals.css";
import { Inter } from "@next/font/google";

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
			<body className="font-noto_sans font-medium">
				<Header />
				{children}
			</body>
		</html>
	);
}
