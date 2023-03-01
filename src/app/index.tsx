import React, { FC } from "react";
import { createRoutesView, RouterProvider } from "atomic-router-react";
import AuthPage from "../pages/auth";
import router from "./routing";
import HomePage from "../pages/home";
import { authRoute, homeRoute } from "../shared/routes";
import NotFoundPage from "../pages/errors/NotFound";
import PageLayout from "./hocs/PageLayout";
import "./index.scss";

const RoutesView = createRoutesView({
	routes: [
		{ route: homeRoute, view: HomePage, layout: PageLayout },
		{ route: authRoute, view: AuthPage, layout: PageLayout }
	],
	otherwise: NotFoundPage
});


const App: FC = () => {
	return (
		<RouterProvider router={router}>
			<RoutesView />
		</RouterProvider>
	);
};

export default App;