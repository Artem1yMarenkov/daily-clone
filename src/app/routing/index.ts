import { createHistoryRouter } from "atomic-router";
import { createBrowserHistory } from "history";
import { authRoute, homeRoute } from "../../shared/routes";

const router = createHistoryRouter({
	routes: [
		{ path: "/auth", route: authRoute },
		{ path: "/", route: homeRoute }
	]
});

const history = createBrowserHistory();

router.setHistory(history);

export default router;