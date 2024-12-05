import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorPage } from "./components/ErrorPage.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>,
);
