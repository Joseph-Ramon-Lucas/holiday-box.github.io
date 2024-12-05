import { useNavigate } from "react-router";

export function ErrorPage() {
	let navigateTo = useNavigate();
	return (
		<div>
			<h1>Oops this place doesn't exist!</h1>
			<h2>Error: 404</h2>

			<p>click this button to go home</p>
			<button onClick={() => navigateTo("/")}>Home 🏠</button>
		</div>
	);
}
