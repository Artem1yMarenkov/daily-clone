import React, { FC } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const AuthForm: FC = () => {
	return (
		<Paper sx={{ padding: "20px", }}>
			<Stack spacing="16px">
				<Typography 
					fontSize={{ xs: "20px", md: "24px" }} 
					fontWeight={600}
				>
					Вход
				</Typography>
				<TextField size="small" label="Логин" />
				<TextField size="small" label="Пароль" />
				<Button variant="contained">Войти</Button>
			</Stack>
		</Paper>
	);
};