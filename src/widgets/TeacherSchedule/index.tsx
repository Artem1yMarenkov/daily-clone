import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ScheduleItem from "./ScheduleItem";
import { teacherScheduleRoute } from "../../entities/routes";


const TeacherScheduleWidget: FC = () => {
	return (
		<Stack alignItems="flex-start" gap="20px">
			<Stack flexDirection="row" gap="20px">
				<Typography variant="h4" fontWeight={600}>Расписание занятий</Typography>
				<Button size="small" onClick={() => teacherScheduleRoute.open()}>Смотреть расписание полностью</Button>
			</Stack>
			<Stack flexDirection="row" gap="30px">
				<Stack gap="12px">
					<Typography variant="h5" fontWeight="500">Вчера</Typography>
					<ScheduleItem title="Решение уравнений графическим способом"/>
				</Stack>
				<Stack gap="12px">
					<Typography variant="h5" fontWeight="500">Сегодня</Typography>
					<ScheduleItem title="Логарифмические неравенства"/>
					<ScheduleItem title="Решение уравнений графическим способом"/>
					<ScheduleItem title="Биквадратные уравнения"/>
				</Stack>
				<Stack gap="12px">
					<Typography variant="h5" fontWeight="500">Завтра</Typography>
					<ScheduleItem title="Тригонометрия"/>
					<ScheduleItem title="Тригонометрия"/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default TeacherScheduleWidget;