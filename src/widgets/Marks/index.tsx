import { Button, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC } from "react";
import { scheludeRoute } from "../../entities/routes";

const MarksWidget: FC = () => {
	return (
		<Stack sx={{ width: "50%" }}>
			<Stack flexDirection="row" gap="20px">
				<Typography fontSize="32px" fontWeight="600">Оценочки</Typography>
				<Button onClick={() => scheludeRoute.open()} size="small">Смотреть все оценки</Button>
			</Stack>
			<Paper sx={{ borderRadius: "10px", marginTop: "20px" }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>Математика</TableCell>
							<TableCell sx={{ color: "red" }}>2</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Русский язык</TableCell>
							<TableCell sx={{ color: "green" }}>4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Информатика</TableCell>
							<TableCell sx={{ color: "green" }}>4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Литература</TableCell>
							<TableCell sx={{ color: "red" }}>2</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Английский язык</TableCell>
							<TableCell sx={{ color: "red" }}>2</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Stack>
	);
};

export default MarksWidget;