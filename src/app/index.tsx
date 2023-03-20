import React, { FC } from "react";
import { createRoutesView, RouterProvider } from "atomic-router-react";
import router from "./routing";
import HomePage from "../pages/home";
import { authRoute, homeRoute, chatRoute } from "../entities/routes";
import NotFoundPage from "../pages/errors/NotFound";
import PageLayout from "./hocs/PageLayout";
import "./index.scss";
import AuthPage from "../pages/Auth";
import Chat from "../pages/Chat";

const RoutesView = createRoutesView({
	routes: [
		{ route: homeRoute, view: HomePage, layout: PageLayout },
		{ route: authRoute, view: AuthPage, layout: PageLayout },
		{ route: chatRoute, view: Chat, layout: PageLayout }
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