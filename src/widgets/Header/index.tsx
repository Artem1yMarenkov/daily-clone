import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useStore } from "effector-react";
import { $auth, logout } from "../../processes/auth";
import { Link } from "atomic-router-react";
import { homeRoute, lessonRoute, teacherScheduleRoute } from "../../entities/routes";
import bannerImage from "../../shared/assets/banner.png";

const Header: FC = () => {
	const { isLogin } = useStore($auth);

	const handleLogout = () => logout();

	return (
		<>
			<Stack sx={{  background: "white", marginBottom: "30px" }}>
				<Container sx={{ padding: "15px" }}>
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Link to={homeRoute} href="/" style={{ textDecoration: "none", color: "black" }}>
							<Typography 
								fontSize="20px" 
								fontWeight="600"
							>
								школьный дневник
							</Typography>
						</Link>
						{
							isLogin == true &&
							<Button onClick={handleLogout} size="small">Выйти</Button>
						}
					</Stack>
				</Container>
				{
					(
						homeRoute.$isOpened.getState() || teacherScheduleRoute.$isOpened.getState() || lessonRoute.$isOpened.getState()
					) &&
					<Box 
						sx={{ 
							height: "220px", 
							width: "100%", 
							borderRadius: "5px", 
							background: `url(${bannerImage})`
						}}
					></Box>
				}
			</Stack>
		</>
	);
};

export default Header;