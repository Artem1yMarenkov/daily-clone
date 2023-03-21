import { Button, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC } from "react";
import { scheludeRoute } from "../../entities/routes";

const HomeTaskWidget: FC = () => {
	return (
		<Stack sx={{ width: "50%" }}>
			<Stack flexDirection="row" gap="20px">
				<Typography fontSize="32px" fontWeight="600">Д/з на завтра</Typography>
			</Stack>
			<Paper sx={{ borderRadius: "10px", marginTop: "20px", padding: "20px"}}>
				<Stack gap="20px">
					<Stack>
						<Typography fontWeight="600">
							Математика
						</Typography>
						<Typography>
							№ 123-125(а, б, г)
						</Typography>
					</Stack>
					<Stack>
						<Typography fontWeight="600">
							Литература
						</Typography>
						<Typography>
							Выучить стихотворение Цветаевой
						</Typography>
					</Stack>
				</Stack>
			</Paper>
		</Stack>
	);
};

export default HomeTaskWidget;