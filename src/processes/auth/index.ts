import { createStore, createEvent } from "effector";
import router from "../../app/routing";
import { authRoute, homeRoute } from "../../entities/routes";

type AuthDataType = {
	login: string
	password: string
}

type AuthStoreType = {
    isLogin: boolean,
	authData: AuthDataType | null
}

export const $auth = createStore<AuthStoreType>({
	isLogin: false,
	authData: null,
});

export const login = createEvent<AuthDataType>();
export const logout = createEvent<void>();

$auth.on(login, (state, { login, password }) => {
	return {
		isLogin: true,
		authData: {
			login, password
		}
	};
});

$auth.on(logout, () => {
	return {
		isLogin: false,
		authData: null
	};
});


$auth.watch((state) => {
	const { isLogin } = state;
	const { pathname } = window.location;

	if (isLogin && pathname.includes("/auth")) {
		homeRoute.open();
	}

	if (!isLogin) {
		authRoute.open();
	}
});

router.$path.watch((path) => {
	const { isLogin } = $auth.getState();

	if (!isLogin) {
		authRoute.open();
	}
});

// Mock Authentication
const unwatchAuthStore = $auth.watch(() => {
	setTimeout(() => {
		login({
			login: "Артём Маренков",
			password: "qwerty123"
		});
		unwatchAuthStore();
	}, 100);
});