import { createRoute } from "atomic-router";

export const authRoute = createRoute();
export const homeRoute = createRoute();
export const chatRoute = createRoute();
export const scheludeRoute = createRoute();

export const routes = [
	{ path: "/schelude", route: scheludeRoute },
	{ path: "/chat", route: chatRoute },
	{ path: "/auth", route: authRoute },
	{ path: "/", route: homeRoute }
];