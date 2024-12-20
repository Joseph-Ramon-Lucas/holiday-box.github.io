import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { Home } from "./components/Home.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>,
);
