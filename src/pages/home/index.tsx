import React from "react";
import { createRouteView } from "atomic-router-react";
import { chatRoute, homeRoute, scheludeRoute, teacherScheduleRoute } from "../../entities/routes";
import { $auth } from "../../processes/auth";
import { useStore } from "effector-react";
import { Badge, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import TeacherScheduleWidget from "../../widgets/TeacherSchedule";
import MarksWidget from "../../widgets/Marks";
import HomeTaskWidget from "../../widgets/HomeTask";

const Page = () => {
	const { authData } = useStore($auth);
	
	return (
		<Box>
			<h1>Доброе утро, {authData?.login} 👋</h1>
			<Stack gap="20px" flexDirection="row">
				<Stack alignItems="flex-start" gap="20px" flexDirection="row">
					<Button onClick={() => teacherScheduleRoute.open()}>Расписание занятий</Button>
					<Button onClick={() => scheludeRoute.open()}>Журнал оценок</Button>
					<Button onClick={() => chatRoute.open()}>
						<Badge badgeContent={2} color="error">
							Мессенджер
						</Badge>
					</Button>
				</Stack>
				<Stack></Stack>
			</Stack>
			<Box sx={{ marginTop: "40px" }}>
				<TeacherScheduleWidget />
			</Box>
			<Stack flexDirection="row" gap="20px" marginTop="60px">
				<MarksWidget />
				<HomeTaskWidget />
			</Stack>
		</Box>
	);
};

const HomePage = createRouteView({
	route: homeRoute,
	view: Page
});

export default HomePage;