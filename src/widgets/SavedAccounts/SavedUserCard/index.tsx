import React, { FC } from "react";
import { Avatar, Link, Paper, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Stack } from "@mui/system";
import { login } from "../../../processes/auth";

interface IProps {
	userData: {
		login: string,
		password: string
	}
}

const SavedUserCard: FC<IProps> = ({userData}) => {
	const handleLogin = () => {
		login(userData);
	};

	return (
		<Paper sx={{ 
			boxShadow: "0",
			background: "#fdfdfd",
			border: "1px solid #dadada",
			padding: "20px"
		}}>
			<Stack flexDirection="row" gap="20px">
				<Avatar sx={{ bgcolor: "orange" }}>
					{userData.login[0]}
				</Avatar>
				<Stack alignItems="flex-start" gap="6">
					<Typography fontSize="16px" fontWeight="600">{userData.login}</Typography>
					<Link color="#0E6AD6">
						<Stack flexDirection="row" gap="6px">
							<Typography fontSize="14px" onClick={handleLogin}>Войти</Typography>
							<ArrowRightAltIcon fontSize="small" />
						</Stack>
					</Link>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default SavedUserCard;