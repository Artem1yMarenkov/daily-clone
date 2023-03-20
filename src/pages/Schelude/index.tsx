import React from "react";
import { createRouteView } from "atomic-router-react";
import { scheludeRoute } from "../../entities/routes";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const rows = [
	{ id: 3.35, firstName: "Дмитрий Паномарев", score1: 2, score2: 3, score3: 5, score4: 4,score5: 4,score6: 5,score7: 5, score8: 3, score9: 2, score10: 5 },
	{ id: 3.65, firstName: "Иван Калачников", score1: 2, score2: 3, score3: 5, score4: 4,score5: 2,score6: 5,score7: 4, score8: 3, score9: 5, score10: 4},
	{ id: 3, firstName: "Артем Димитров", score1: 1, score2: 3, score3: 5, score4: 4,score5: 3,score6: 5,score7: 1,score8: 3, score9: 4, score10: 3 },
	{ id: 4.52, firstName: "Лимп Бисквит", score1: 3, score2: 5, score3: 5, score4: 4,score5: 5,score6: 5,score7: 3, score8: 3, score9: 1, score10: 2},
	{ id: 2.51, firstName: "Матвей А.", score1: 4, score2: 3, score3: 5, score4: 4,score5: 3,score6: 5,score7: 2, score8: 3, score9: 3, score10: 1},
	{ id: 5, firstName: "Владимир Путин", score1: 5, score2: 3, score3: 5, score4: 4,score5: 1,score6: 5,score7: 5, score8: 3, score9: 5, score10: 5},
	{ id: 4.12, firstName: "Слава Воронцов", score1: 1, score2: 3, score3: 5, score4: 4,score5: 4,score6: 5,score7: 1, score8: 3, score9: 4, score10: 2},
	{ id: 2.54, firstName: "Мезза Морта", score1: 2, score2: 3, score3: 5, score4: 4,score5: 5,score6: 5,score7: 4, score8: 3, score9: 1, score10: 4},
	{ id: 3.16, firstName: "Дэн Абрамов", score1: 4, score2: 2, score3: 5, score4: 4,score5: 2,score6: 5,score7: 3, score8: 3, score9: 2, score10: 3},
];

const columns: GridColDef[] = [
	{ 
		
		field: "firstName", 
		headerName: "Имя ученика", 
		width: 200 
	},
	{
		flex: 0.6,
		field: "score1",
		headerName: "",
		type: "number",
		width: 10,
	},
	{flex: 0.6,
		field: "score2",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score3",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score4",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score5",
		headerName: "",
		type: "number",
		width: 10,
	},

	{
		flex: 0.6,
		field: "score6",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score7",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score8",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score9",
		headerName: "",
		type: "number",
		width: 10,
	},
	{
		flex: 0.6,
		field: "score10",
		headerName: "",
		type: "number",
		width: 10,
	},
	{ flex: 1, field: "id", headerName: "Средний Балл", 
		valueGetter: (params: GridValueGetterParams) => ((params.row.score1 + params.row.score2 + params.row.score3 + params.row.score4 + params.row.score5 + params.row.score6 + params.row.score7)/7).toFixed(2),
	},
];

const Schelude = () => {
	return (
		<>
			<div style={{ height: 500, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
				/>
			</div>
		</>
	);
};

const scheludePage = createRouteView({
	route: scheludeRoute,
	view: Schelude
});

export default scheludePage;