"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyButton from "@/components/MyButton";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleClick = () => {
		console.log("clicked");
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<div className="py-10 px-5 flex flex-col md:flex-row md:justify-center">
			<div className="py-10 shadow-zinc-500 shadow-md bg-zinc-50 rounded-md px-3 w-[80%] max-w-[400px] mx-auto text-center">
				<div className="flex items-center justify-center text-2xl">
					<span className="pr-5 text-3xl">
						<AccountCircleIcon fontSize="large" />
					</span>
					SignUP
				</div>
				<div className="flex flex-col py-10">
					<TextField
						required
						id="outlined-required"
						label="E-mail Address"
						margin="normal"
						autoComplete="off"
					/>
					<FormControl variant="outlined" margin="normal">
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					<FormControl variant="outlined" margin="normal">
						<InputLabel htmlFor="outlined-adornment-password">
							Password Confirm
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password Confirm"
						/>
					</FormControl>
					<div className="pt-5 w-[80%] mx-auto">
						<MyButton secondary onClick={handleClick}>
							Register
						</MyButton>
						<p className="pt-4 text-sm">
							Already have an account?
							<Link href={"/account/login"}>
								<span className="text-blue-500 pl-2">LogIn</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="my-8 w-[80%] aspect-video mx-auto relative md:max-w-[500px]">
				<Image
					src={"/image/signup.png"}
					alt="signup"
					fill
					sizes="100%"
					priority={true}
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default RegisterPage;
