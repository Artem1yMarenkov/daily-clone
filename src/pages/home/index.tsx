import React, { FC } from "react";
import { createRouteView } from "atomic-router-react";
import { chatRoute, homeRoute } from "../../entities/routes";
import { $auth } from "../../processes/auth";
import { useStore } from "effector-react";
import { Button, Stack } from "@mui/material";

const Page = () => {
	const { authData } = useStore($auth);
	
	return (
		<>
			<Stack>
				<h1>Йоу, {authData?.login} 👋</h1>
				<Button onClick={() => chatRoute.open()} variant="outlined">Сообщения</Button>
			</Stack>
		</>
	);
};

const HomePage = createRouteView({
	route: homeRoute,
	view: Page
});

export default HomePage;