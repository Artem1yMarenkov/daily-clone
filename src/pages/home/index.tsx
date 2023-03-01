import React from "react";
import { createRouteView } from "atomic-router-react";
import { homeRoute } from "../../shared/routes";

const HomePage = createRouteView({
	route: homeRoute,
	view: () => (
		<h1>Главная страница</h1>
	)
});

export default HomePage;