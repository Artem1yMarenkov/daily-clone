import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Paper, SxProps, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC } from "react";
import { lessonRoute } from "../../entities/routes";

const paperSx: SxProps = {
	padding: "12px",
	width: "370px",
	cursor: "pointer"
};

interface IScheduleItemProps {
	title: string
}

const ScheduleItem: FC<IScheduleItemProps> = ({ title }) => {
	return (
		<Paper sx={paperSx} onClick={() => lessonRoute.open()}>
			<Typography fontSize="14px">Математика</Typography>
			<Typography fontSize="16px" fontWeight="500">{title}</Typography>
			<Stack gap="4px">
				<Stack flexDirection="row" gap="6px" alignItems="center">
					<AccessTimeIcon fontSize="small" />
					<Typography fontSize="12px">Время - с 8:00 до 8:40</Typography>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default ScheduleItem;