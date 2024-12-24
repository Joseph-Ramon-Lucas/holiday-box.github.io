import {
	Button,
	Grid2,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableHeadProps,
	TableRow,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../index.css";
//import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import getDayMessage from "../components/dayMessages";
import PopupDialog from "./PopupDialog";
import { styled } from "@mui/material/styles";

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
	const StyledButton = styled(Button)(() => ({
		borderRadius: "5px",
		// maxHeight: "30px",
		// maxWidth: "20px",
	}));

	const StyledGrid = styled(Grid2)(() => ({
		alignContent: "center",
	}));

	return (
		<Paper
			sx={{
				padding: { xs: "16px", md: "32px 150px", lg: "50px 300px" },
				background: "beige",
				textAlign: "center",
				margin: { xs: "25px", lg: "40px" },
				borderRadius: { xs: "32px" },
			}}
			elevation={15}
		>
			<h1 className="text-5xl font-extrabold text-center p-10">
				🎁 Joe's Holiday Calendar 🎄
			</h1>
			<h2 className="text-4xl font-bold text-center pb-5">December</h2>

			<Paper
				elevation={10}
				sx={{ borderRadius: " 15px", padding: "5px", margin: "5px" }}
			>
				<Paper elevation={0} square sx={{ padding: "16px" }}>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						<StyledGrid size="grow">
							<Paper>sun</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>mon</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>tue</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>wed</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>thu</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>fri</Paper>
						</StyledGrid>
						<StyledGrid size="grow">
							<Paper>sat</Paper>
						</StyledGrid>
						{/*  */}
					</Grid>
				</Paper>
				{/* week 1 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							<StyledGrid key={index} size="grow">
								<div>{index + 1}</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 2 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							<StyledGrid key={index + 7} size="grow">
								<div>{index + 8}</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 3 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							<StyledGrid key={index + 14} size="grow">
								<div>{index + 15}</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
			</Paper>
		</Paper>
	);
}
