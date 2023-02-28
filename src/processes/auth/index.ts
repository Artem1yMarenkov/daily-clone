import { createStore, createEvent } from "effector";

type AuthDataType = {
	login: string
	password: string
}

type AuthStoreType = {
    isLogin: boolean,
	userName: string | null,
	authData: AuthDataType | null
}

export const $auth = createStore<AuthStoreType>({
	isLogin: false,
	userName: null,
	authData: null,
});

export const login = createEvent<AuthDataType>();
export const logout = createEvent<void>();

$auth.on(login, (state, {login, password}) => {
	return {
		isLogin: true,
		userName: "USER_NAME_NOT_STATED FIX IT",
		authData: {
			login, password
		}
	};
});