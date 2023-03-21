import React from "react";
import { createRouteView } from "atomic-router-react";
import { chatRoute, homeRoute, lessonRoute } from "../../entities/routes";
import { Button, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Lesson = () => {
	return (
		<Box>
			<Stack flexDirection="row" gap="60px" justifyContent="space-between">
				<Stack sx={{ width: "70%" }} gap="20px">
					<Stack 
						flexDirection="row" 
						alignItems="center" 
						gap="8px" 
						sx={{ cursor: "pointer" }} 
						onClick={() => homeRoute.open()}
					>
						<IconButton>
							<ArrowBackIosNewIcon />
						</IconButton>
						<Typography>Назад</Typography>
					</Stack>
					<Typography variant="h4" fontWeight="600">Решение уравнений графическим способом</Typography>
					<Typography fontSize="16px">
						Графиком уравнения с двумя переменными называется множество точек
						координатной плоскости, координаты которых обращают уравнение в верное
						равенство.
					</Typography>
					<Typography fontSize="16px">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
						in culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Typography variant="h4" fontWeight="600">Дополнительные материалы</Typography>
					<Link href="https://www.youtube.com/watch?v=a5nvD14URMQ&ab_channel=%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%9C%D0%93%D0%A3">
						Видеоразбор урока
					</Link>
					<Typography variant="h4" fontWeight="600">Домашняя работа</Typography>
					<Typography fontSize="16px">
						Домашней работы нет
					</Typography>
				</Stack>
				<Stack sx={{ width: "25%" }} gap="8px" marginTop="20px">
					<Stack gap="6px" marginBottom="20px">
						<Typography fontSize="18px" fontWeight="600">Дополнительная информация по уроку</Typography>
						<Typography fontSize="14px">Время провередия - с 8:00 до 8:40</Typography>
						<Typography fontSize="14px">Крайний срок Д/З - 25.03.2023</Typography>
					</Stack>
					<Typography fontSize="18px" fontWeight="600">Остались вопросы по уроку?</Typography>
					<Typography fontSize="14px">Задавать вопросы не страшно, ведь они делают нас умнее!</Typography>
					<Button sx={{ width: "100%"}} variant="contained" onClick={() => chatRoute.open()}>Спросить у учителя</Button>
				</Stack>
			</Stack>
		</Box>
	);
};

const LessonPage = createRouteView({
	route: lessonRoute,
	view: Lesson
});

export default LessonPage;