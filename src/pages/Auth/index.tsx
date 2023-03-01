import React from "react";
import { Container, Grid } from "@mui/material";
import { AuthForm } from "../../widgets/AuthForm";
import SavedAccounts from "../../widgets/SavedAccounts";
import { createRouteView } from "atomic-router-react";
import { authRoute } from "../../shared/routes";

const AuthPage = createRouteView({
	route: authRoute,
	view: () => (
		<Container>
			<Grid 
				container 
				spacing={2}
				direction={{
					xs: "column-reverse",
					md: "row"
				}}
			>
				<Grid item xs={12} md={9}>
					<SavedAccounts />
				</Grid>
				<Grid item xs={12} md={3}>
					<AuthForm />
				</Grid>
			</Grid>
		</Container>
	)
});

export default AuthPage;