import React, { FC } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm } from "../../shared/lib/forms";
import $$form from "./formModel";

export const AuthForm: FC = () => {
	const { onSubmit } = useForm($$form);

	return (
		<Paper sx={{ padding: "20px", }}>
			<form onSubmit={(e) => {
				e.preventDefault();
				onSubmit();
			}}>
				<Stack spacing="16px">
					<Typography 
						fontSize={{ xs: "20px", md: "24px" }} 
						fontWeight={600}
					>
						Вход
					</Typography>
					<TextField size="small" label="Логин" />
					<TextField size="small" label="Пароль" />
					<Button variant="contained" type="submit">Войти</Button>
				</Stack>
			</form>
		</Paper>
	);
};