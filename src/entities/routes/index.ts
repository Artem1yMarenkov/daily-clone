import { createRoute } from "atomic-router";

export const authRoute = createRoute();
export const homeRoute = createRoute();
export const chatRoute = createRoute();
export const scheludeRoute = createRoute();
export const teacherScheduleRoute = createRoute();
export const lessonRoute = createRoute();

export const routes = [
	{ path: "/schelude", route: scheludeRoute },
	{ path: "/lesson", route: lessonRoute },
	{ path: "/chat", route: chatRoute },
	{ path: "/auth", route: authRoute },
	{ path: "/teacher-schedule", route: teacherScheduleRoute },
	{ path: "/", route: homeRoute }
];