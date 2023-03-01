import { createHistoryRouter } from "atomic-router";
import { createBrowserHistory } from "history";
import { routes } from "../../entities/routes";

const router = createHistoryRouter({
	routes
});

const history = createBrowserHistory();

router.setHistory(history);

export default router;