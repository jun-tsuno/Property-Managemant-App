"use client";
import * as React from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogOut from "@/firebase/auth/LogOut";

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
	{ name: "HOME", to: "/" },
	{ name: "BOARD", to: "/board" },
	{ name: "POST", to: "/post" },
];

const Navigation = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { user } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const handleLogOut = async () => {
		await LogOut();
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<Link href={"/"}>Rent</Link>
			</Typography>

			<Divider />
			<List>
				{/* {navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<Link href={item.to}>
								<ListItemText primary={item.name} />
							</Link>
						</ListItemButton>
					</ListItem>
				))} */}
				{!user ? (
					<Link href={"/account/login"}>
						<ListItem disablePadding>
							<ListItemButton sx={{ textAlign: "center" }}>
								<ListItemText>
									<LoginIcon sx={{ marginRight: "5px" }} />
									LOGIN
								</ListItemText>
							</ListItemButton>
						</ListItem>
					</Link>
				) : (
					<Link href={"/"}>
						<ListItem disablePadding>
							<ListItemButton
								sx={{ textAlign: "center" }}
								onClick={handleLogOut}
							>
								<ListItemText>
									<LoginIcon sx={{ marginRight: "5px" }} />
									LOGOUT
								</ListItemText>
							</ListItemButton>
						</ListItem>
					</Link>
				)}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav" sx={{ boxShadow: "none" }}>
				<Toolbar
					sx={{ backgroundColor: "rgb(14 165 233)", color: "rgb(240 249 255)" }}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						<Link href={"/"}>Rent</Link>
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{/* {navItems.map((item) => (
							<Button
								size="large"
								key={item.name}
								sx={{
									color: "black",
									":hover": {
										color: "#DC5F00",
										backgroundColor: "transparent",
									},
								}}
							>
								<Link href={item.to}>{item.name}</Link>
							</Button>
						))} */}
						{!user ? (
							<Link href={"/account/login"}>
								<Button
									size="large"
									sx={{
										color: "black",
										backgroundColor: "#eeeeee!important",
										":hover": {
											color: "#fb862e",
										},
									}}
									startIcon={<LoginIcon />}
								>
									LOGIN
								</Button>
							</Link>
						) : (
							<Link href={"/"}>
								<Button
									size="large"
									sx={{
										color: "black",
										backgroundColor: "#eeeeee!important",
										":hover": {
											color: "#fb862e",
										},
									}}
									startIcon={<LoginIcon />}
									onClick={handleLogOut}
								>
									LOGOUT
								</Button>
							</Link>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navigation;
