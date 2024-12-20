import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import "../index.css";
//import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import getDayMessage from "../components/dayMessages";
import "./App.css";
// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// 	height: 60,
// 	lineHeight: "60px",
// }));

// const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: "light" } });

export function Home() {
	return (
		<Paper sx={{ padding: "32px", background: "beige" }}>
			{/* <h1>Joe's Advent Calendar</h1> */}
			<h1>Holiday Calendar</h1>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>December</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>
								<Button onClick={() => getDayMessage(1)}>1</Button>
								<Button onClick={() => getDayMessage(2)}>2</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
