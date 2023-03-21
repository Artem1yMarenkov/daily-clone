import React from "react";
import { createRouteView } from "atomic-router-react";
import { homeRoute, teacherScheduleRoute } from "../../entities/routes";
import ScheduleItem from "../../widgets/TeacherSchedule/ScheduleItem";
import { Box, Stack } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const TeacherSchedulePage = () => {
	return (
		<Box>
			<Stack 
				flexDirection="row" 
				alignItems="center" 
				gap="8px" 
				sx={{ cursor: "pointer" }} 
				onClick={() => homeRoute.open()}
				marginBottom="20px"
			>
				<IconButton>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography>Назад</Typography>
			</Stack>
			<Typography variant="h4" fontWeight="600" marginBottom="30px">Расписание на неделю</Typography>
			<Stack gap="20px" flexDirection="row" flexWrap="wrap">
				<Stack gap="10px">
					<Typography fontSize="18px" fontWeight="600">Понедельник</Typography>
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
				</Stack>
				<Stack gap="8px">
					<Typography fontSize="18px" fontWeight="600">Вторник</Typography>
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
				</Stack>
				<Stack gap="8px">
					<Typography fontSize="18px" fontWeight="600">Среда</Typography>
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
				</Stack>
				<Stack gap="8px">
					<Typography fontSize="18px" fontWeight="600">Четверг</Typography>
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
				</Stack>
				<Stack gap="8px">
					<Typography fontSize="18px" fontWeight="600">Пятница</Typography>
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
					<ScheduleItem title="" />
				</Stack>
			</Stack>
		</Box>
	);
};

const teacherScheludePage = createRouteView({
	route: teacherScheduleRoute,
	view: TeacherSchedulePage
});

export default teacherScheludePage;