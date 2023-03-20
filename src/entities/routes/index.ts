import { createRoute } from "atomic-router";

export const authRoute = createRoute();
export const homeRoute = createRoute();
export const chatRoute = createRoute();

export const routes = [
	{ path: "/chat", route: chatRoute },
	{ path: "/auth", route: authRoute },
	{ path: "/", route: homeRoute }
];