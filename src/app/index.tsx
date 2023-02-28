import { Stack } from "@mui/system";
import React, { FC } from "react";
import AuthPage from "../pages/Auth";
import Header from "../widgets/Header";
import "./index.scss";

const App: FC = () => {
	return (
		<>
			<Header />
			<Stack flexDirection="row">
				<AuthPage />
			</Stack>
		</>
	);
};

export default App;