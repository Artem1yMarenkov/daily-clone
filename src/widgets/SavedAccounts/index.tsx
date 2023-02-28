import React, { FC } from "react";
import { Grid, Paper, Typography} from "@mui/material";
import SavedUserCard from "./SavedUserCard";

interface IMockSavedUser {
	name: string,
	authData: {
		login: string,
		password: string
	}
}

const mockSavedUser: IMockSavedUser = {
	name: "Артём Маренков",
	authData: {
		login: "orvysegor@gmail.com",
		password: "qwerty12345",
	}
};

const SavedAccounts: FC = () => {
	const savedUsers: IMockSavedUser[] = [mockSavedUser, mockSavedUser, mockSavedUser];

	return (
		<Paper sx={{ padding: "20px" }}>
			<Typography
				fontSize={{ xs: "20px", md: "24px" }}
				fontWeight="600"
				marginBottom="20px"
			>
				Сохраненные аккаунты
			</Typography>
			{
				savedUsers.length != 0 &&
				<Grid container spacing={2}>
					{
						savedUsers.map(({name, authData}) => {
							return (
								<Grid item xs={12} sm={6} md={6} key={name}>
									<SavedUserCard 
										name={name}
										authData={authData}
									/>
								</Grid>
							);
						})
					}
				</Grid>
			}
			{
				savedUsers.length == 0 &&
				<Typography 
					lineHeight="24px" 
					fontSize="16px"
				>Сохраненные аккаунты не найдены</Typography>
			}
		</Paper>
	);
};

export default SavedAccounts;