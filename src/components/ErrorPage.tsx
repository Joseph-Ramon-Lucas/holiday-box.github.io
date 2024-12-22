import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export function ErrorPage() {
	const navigateTo = useNavigate();
	return (
		<div>
			<h1>Oops this place doesn't exist!</h1>
			<h2>Error: 404</h2>

			<p>click this button to go home</p>
			<Button onClick={() => navigateTo("/holiday-box.github.io")}>
				Home 🏠
			</Button>
		</div>
	);
}
