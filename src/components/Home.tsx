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
import PopupDialog from "./PopupDialog";

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
		<Paper
			sx={{
				padding: { xs: "32px", m: "50px 250px", lg: "100px 500px" },
				background: "beige",
				textAlign: "center",
				margin: { xs: "25px", lg: "40px" },
			}}
		>
			<h1 className="text-5xl font-extrabold text-center p-10">
				🎁 Joe's Holiday Calendar 🎄
			</h1>
			<h2 className="text-4xl font-bold text-center p-1">December</h2>
			<Table sx={{ minWidth: "full" }}>
				<th>sun</th>
				<th>mon</th>
				<th>tue</th>
				<th>wed</th>
				<th>thu</th>
				<th>fri</th>
				<th>sat</th>
				<TableRow sx={{ padding: "10px" }}>
					<Button onClick={() => getDayMessage(1)}>
						<TableCell>1</TableCell>
					</Button>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</TableRow>
				<TableRow sx={{ padding: "10px" }}>
					<td>8</td>
					<td>9</td>
					<td>10</td>
					<td>11</td>
					<td>12</td>
					<td>13</td>
					<td>14</td>
				</TableRow>
			</Table>
		</Paper>
	);
}
