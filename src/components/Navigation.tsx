"use client";
import * as React from "react";
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
import Link from "next/link";

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

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Rent
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
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav" sx={{ boxShadow: "none" }}>
				<Toolbar sx={{ backgroundColor: "white", color: "black" }}>
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
						Rent
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
