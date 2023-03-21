import React, { FC } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../processes/auth";

type AuthFormType = {
	login: string,
	password: string
};

export const AuthForm: FC = () => {
	const { handleSubmit, register, formState: { errors } } = useForm<AuthFormType>({
		defaultValues: {
			login: "",
			password: "",
		}
	});

	const handleValidLogin: SubmitHandler<AuthFormType> = (data) => {
		login(data);
	};

	return (
		<Paper sx={{ padding: "20px", }}>
			<form onSubmit={handleSubmit(handleValidLogin)}>
				<Stack spacing="16px">
					<Typography 
						fontSize={{ xs: "20px", md: "24px" }} 
						fontWeight={600}
					>
						Вход
					</Typography>
					<TextField 
						size="small" 
						label="Логин"
						error={!!errors?.login}
						helperText={errors?.login ? "Заполните поле" : ""}
						{...register("login", { required: true })}
					/>
					<TextField 
						size="small" 
						label="Пароль"
						error={!!errors?.password}
						helperText={errors?.password ? "Заполните поле" : ""}
						type="password"
						{...register("password", { required: true })}
					/>
					<Button variant="contained" type="submit">Войти</Button>
				</Stack>
			</form>
		</Paper>
	);
};