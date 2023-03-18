import { sample, createEffect, createStore, createEvent } from "effector";
import { $auth, login } from "../processes/auth";

interface AuthDataType {
	login: string
	password: string
}

interface CachedUsersStoreType {
	[login: string]: string
}

export const $cachedAccounts = createStore<CachedUsersStoreType>({} as CachedUsersStoreType);

const setCachedAccountsEvent = createEvent<CachedUsersStoreType>();

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

$cachedAccounts.on(cacheAccountFx, (payload) => payload);

const unwatchCachedAccounts = $cachedAccounts.watch(() => {
	setTimeout(() => {
		const cachedUsers: CachedUsersStoreType = JSON.parse(String(localStorage.getItem("cachedUsers"))) || {};

		setCachedAccountsEvent(cachedUsers);
		unwatchCachedAccounts();
	}, 0);
});

$cachedAccounts.on(setCachedAccountsEvent, (state, payload) => payload);

// Save new account in local storage after login
sample({
	clock: login,
	source: $auth,
	fn: (state) => (state.authData),
	target: cacheAccountFx
});