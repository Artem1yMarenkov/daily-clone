import { sample, createEffect, createStore } from "effector";
import { authRoute } from "../entities/routes";
import { $auth, login } from "../processes/auth";

interface AuthDataType {
	login: string
	password: string
}

interface CachedUsersStoreType {
	[login: string]: string
}

export const $cachedAccounts = createStore<CachedUsersStoreType>({} as CachedUsersStoreType);

const cacheAccountFx = createEffect<AuthDataType | null, CachedUsersStoreType, void>((authData) => {
	if (authData == null) {
		throw new Error();
	}

	const { login, password } = authData;

	const cachedUsers: CachedUsersStoreType | null = JSON.parse(String(localStorage.getItem("cachedUsers"))) || {};

	if (cachedUsers != null) {
		cachedUsers[login] = password;
	}

	localStorage.setItem("cachedUsers", JSON.stringify(cachedUsers));

	return cachedUsers as CachedUsersStoreType;
});

const syncAccountsFx = createEffect(() => {
	const accounts: CachedUsersStoreType = JSON.parse(String(localStorage.getItem("cachedUsers"))) || {};

	return accounts;
});

$cachedAccounts.on(syncAccountsFx.doneData, (_, payload) => {
	return payload;
});

// Save new account in local storage after login
sample({
	clock: login,
	source: $auth,
	fn: (state) => state.authData,
	target: cacheAccountFx
});

// Get cached accounts from localStorage on authRote open
sample({
	clock: authRoute.opened,
	target: syncAccountsFx
});

syncAccountsFx();