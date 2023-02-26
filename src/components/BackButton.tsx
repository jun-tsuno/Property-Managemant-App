"use client";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

const BackButton = ({ children }: IProps) => {
	const router = useRouter();

	return (
		<BackButton className="inline-block ml-20" onClick={() => router.back()}>
			{children}
		</BackButton>
	);
};

export default BackButton;
