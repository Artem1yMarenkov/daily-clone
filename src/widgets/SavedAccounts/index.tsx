import React, { FC } from "react";
import { Grid, Paper, Typography} from "@mui/material";
import SavedUserCard from "./SavedUserCard";
import { $cachedAccounts } from "../../features/cachedAcccounts";
import { useStoreMap } from "effector-react";

const SavedAccounts: FC = () => {
	const cachedAccounts = useStoreMap($cachedAccounts, (state) => {
		return Object.entries(state).map(([login, password]) => {
			return {
				login, password
			};
		});
	});

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
				cachedAccounts.length != 0 &&
				<Grid container spacing={2}>
					{
						cachedAccounts.map((userData) => {
							return (
								<Grid item xs={12} sm={6} md={6} key={userData.login}>
									<SavedUserCard userData={userData}/>
								</Grid>
							);
						})
					}
				</Grid>
			}
			{
				cachedAccounts.length == 0 &&
				<Typography 
					lineHeight="24px" 
					fontSize="16px"
				>Сохраненные аккаунты не найдены</Typography>
			}
		</Paper>
	);
};

export default SavedAccounts;