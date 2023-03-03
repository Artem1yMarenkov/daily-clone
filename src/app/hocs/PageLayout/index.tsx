import React, { FC, ReactNode } from "react";
import { Container, Stack } from "@mui/system";
import Header from "../../../widgets/Header";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<>
		<Header />
		<Container>
			<Stack flexDirection="row">
				{children}
			</Stack>
		</Container>
	</>
);

export default PageLayout;