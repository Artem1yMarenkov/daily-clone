import React, { FC } from "react";
import { createRoutesView, RouterProvider } from "atomic-router-react";
import router from "./routing";
import HomePage from "../pages/home";
import { authRoute, homeRoute, chatRoute, scheludeRoute, teacherScheduleRoute, lessonRoute } from "../entities/routes";
import NotFoundPage from "../pages/errors/NotFound";
import PageLayout from "./hocs/PageLayout";
import "./index.scss";
import AuthPage from "../pages/Auth";
import chatPage from "../pages/Chat";
import scheludePage from "../pages/Schelude";
import teacherScheludePage from "../pages/TeacherSchedule";
import LessonPage from "../pages/Lesson";

const RoutesView = createRoutesView({
	routes: [
		{ route: homeRoute, view: HomePage, layout: PageLayout },
		{ route: authRoute, view: AuthPage, layout: PageLayout },
		{ route: chatRoute, view: chatPage, layout: PageLayout },
		{ route: scheludeRoute, view: scheludePage, layout: PageLayout },
		{ route: teacherScheduleRoute, view: teacherScheludePage, layout: PageLayout },
		{ route: lessonRoute, view: LessonPage, layout: PageLayout }
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