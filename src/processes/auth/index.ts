import { createStore } from "effector";

type AuthStoreType = {
    isLogin: boolean,
    token: string | null
}

export const $auth = createStore<AuthStoreType>({
	isLogin: false,
	token: null
});