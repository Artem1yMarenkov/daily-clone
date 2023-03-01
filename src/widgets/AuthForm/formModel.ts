import { object, string } from "yup";
import { createForm } from "../../shared/lib/forms";

const $$form = createForm({
	initialValues: {
		login: "",
		password: "",
	},

	schema: object({
		login: string().required(),
		password: string().required(),
	}),
});

$$form.$values.watch((state) => {
	console.log(state);
});

export default $$form;