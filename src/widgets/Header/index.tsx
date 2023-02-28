import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { FC } from "react";

const Header: FC = () => {
	return (
		<Stack sx={{ background: "white", padding: "15px", marginBottom: "70px" }}>
			<Container>
				<Typography 
					fontSize="20px" 
					fontWeight="600"
				>
					школьный дневник
				</Typography>
			</Container>
		</Stack>
	);
};

export default Header;