import React, { FC, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const AuthForm: FC = () => {
	const [formType, setFormType] = useState<"REGISTER" | "LOGIN">("LOGIN");

	const toggleFormType = () => {
		setFormType((type) => {
			if (type == "REGISTER") {
				return "LOGIN";
			} else {
				return "REGISTER";
			}
		});
	};

	return (
		<Stack spacing="10px" width="400px">
			<Typography fontSize="24px">
				{
					formType == "LOGIN"
						? "Вход"
						: "Регистрация"
				}
			</Typography>
			<TextField label="Логин" />
			<TextField label="Пароль" />
			<Button color="success" variant="contained">Войти</Button>
			<Button onClick={toggleFormType}>
				{
					formType == "LOGIN"
						? "Ещё нет аккаунта? Зергистрируйтесь"
						: "Уже есть аккаунт? Войдите"
				}
			</Button>
		</Stack>
	);
};