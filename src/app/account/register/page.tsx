"use client";
import { useState } from "react";
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
import { FaUserCircle } from "react-icons/fa";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<div className="bg-gray-100 px-3 py-5 w-[80%] mx-auto text-center">
			<h2 className="text-xl">
				<span>
					<FaUserCircle />
				</span>
				SignUP
			</h2>

			<div className="flex flex-col py-10">
				<TextField
					required
					id="outlined-required"
					label="E-mail Address"
					margin="normal"
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
				<MyButton>Register</MyButton>
			</div>
		</div>
	);
};

export default RegisterPage;
