"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import MyButton from "@/components/MyButton";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IFormInput {
	email: string;
	password: string;
	passwordConfirm: string;
}

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>({
		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
	});

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const onSubmit = (data: IFormInput) => {
		if (data.password !== data.passwordConfirm) {
			return alert("Please confirm the password.");
		}
		console.log(data);
		reset();
	};

	return (
		<div className="py-10 px-5 flex flex-col md:flex-row md:justify-center">
			<div className="py-10 shadow-zinc-500 shadow-md bg-zinc-50 rounded-md px-3 w-[80%] h-full max-w-[500px] mx-auto text-center">
				<div className="flex items-center justify-center text-2xl">
					<span className="pr-5 text-3xl">
						<AccountCircleIcon fontSize="large" />
					</span>
					SignUp
				</div>
				<form
					className="flex flex-col py-10 w-[90%] max-w-[400px] mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="py-3">
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									autoComplete="off"
									className="w-full"
									{...register("email", {
										required: true,
										pattern: /^\S+@\S+$/i,
									})}
								/>
							)}
						/>
						{errors?.email?.type === "required" && (
							<p className="font-bold text-red-500">Invalid Adress</p>
						)}
					</div>
					<div className="py-3">
						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<FormControl variant="outlined" className="w-full">
									<InputLabel htmlFor="outlined-adornment-password">
										Password
									</InputLabel>
									<OutlinedInput
										{...field}
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
										{...register("password", {
											required: true,
										})}
									/>
								</FormControl>
							)}
						/>
						{errors?.password?.type === "required" && (
							<p className="font-bold text-red-500">Invalid Password</p>
						)}
					</div>
					<div className="py-3">
						<Controller
							name="passwordConfirm"
							control={control}
							render={({ field }) => (
								<FormControl variant="outlined" className="w-full">
									<InputLabel htmlFor="outlined-adornment-passwordConf">
										Password Confirm
									</InputLabel>
									<OutlinedInput
										{...field}
										id="outlined-adornment-passwordConf"
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
										{...register("passwordConfirm", {
											required: true,
										})}
									/>
								</FormControl>
							)}
						/>
						{errors?.password?.type === "required" && (
							<p className="font-bold text-red-500">Invalid Password</p>
						)}
					</div>
					<div className="pt-5 w-[80%] mx-auto">
						<MyButton secondary type="submit">
							SignUp
						</MyButton>
						<p className="pt-4 text-sm">
							Already have an account?
							<Link href={"/account/login"}>
								<span className="text-blue-500 pl-2">Login</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
			<div className="my-8 w-[80%] aspect-square mx-auto relative md:max-w-[500px]">
				<Image
					src={"/image/login.png"}
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
