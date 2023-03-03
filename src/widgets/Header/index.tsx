import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useStore } from "effector-react";
import { $auth, logout } from "../../processes/auth";

const Header: FC = () => {
	const { isLogin } = useStore($auth);

	const handleLogout = () => logout();

	return (
		<Stack sx={{ background: "white", padding: "15px", marginBottom: "70px" }}>
			<Container>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography 
						fontSize="20px" 
						fontWeight="600"
					>
						школьный дневник
					</Typography>
					{
						isLogin == true &&
						<Button onClick={handleLogout} size="small">Выйти</Button>
					}
				</Stack>
			</Container>
		</Stack>
	);
};

export default Header;