import { createRoute } from "atomic-router";

export const authRoute = createRoute();
export const homeRoute = createRoute();

export const routes = [
	{ path: "/auth", route: authRoute },
	{ path: "/", route: homeRoute }
];