import React, { FC } from "react";
import { createRouteView } from "atomic-router-react";
import { homeRoute } from "../../entities/routes";
import { $auth } from "../../processes/auth";
import { useStore } from "effector-react";

const Page = () => {
	const { authData } = useStore($auth);
	
	return (
		<h1>Йоу, {authData?.login} 👋</h1>
	);
};

const HomePage = createRouteView({
	route: homeRoute,
	view: Page
});

export default HomePage;