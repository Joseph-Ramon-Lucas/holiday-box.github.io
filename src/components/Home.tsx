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

export function Home() {
	const StyledButton = styled(Button)(() => ({
		borderRadius: "10px",
		// maxHeight: "30px",
		// maxWidth: "20px",
	}));

	const StyledGrid = styled(Grid2)(() => ({
		alignContent: "center",
	}));

	const DAYS_OF_THE_WEEK: Array<string> = [
		"sun",
		"mon",
		"tue",
		"wed",
		"thu",
		"fri",
		"sat",
	];

	return (
		<Paper
			sx={{
				padding: { xs: "24px", md: "64px 128px", lg: "128px 256px" },
				background: "beige",
				textAlign: "center",
				margin: { xs: "5px", md: "25px", lg: "40px" },
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
				sx={{
					borderRadius: " 15px",
					padding: "5px",
					margin: { sx: "1px", lg: "5px" },
				}}
			>
				<Paper elevation={0} square sx={{ padding: "16px" }}>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(DAYS_OF_THE_WEEK).map((day, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index} size="grow">
								<Paper elevation={5} sx={{ borderRadius: "10px" }}>
									{day}{" "}
								</Paper>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 1 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index} size="grow">
								<div>
									<StyledButton onClick={() => getDayMessage(index + 1)}>
										{index + 1}
									</StyledButton>
								</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 2 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index + 7} size="grow">
								<div>
									<StyledButton onClick={() => getDayMessage(index + 8)}>
										{index + 7}
									</StyledButton>
								</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 3 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index + 14} size="grow">
								<div>
									<StyledButton onClick={() => getDayMessage(index + 15)}>
										{index + 14}
									</StyledButton>
								</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 4 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index + 21} size="grow">
								<div>
									<StyledButton onClick={() => getDayMessage(index + 22)}>
										{index + 21}
									</StyledButton>
								</div>
							</StyledGrid>
						))}
					</Grid>
				</Paper>
				{/* week 5 */}
				<Paper elevation={0} square>
					<Grid container spacing={{ xs: 0.3, md: 0.5, lg: 1 }}>
						{Array.from(Array(7)).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<StyledGrid key={index + 28} size="grow">
								{/*  if the days go past 31 (31 % 7 == 3) -> 
								then add extra white space to make it look more like a calendar and keep it aligned */}
								{index < 3 ? (
									<StyledButton onClick={() => getDayMessage(index + 29)}>
										<div>{index + 29}</div>
									</StyledButton>
								) : (
									<div> </div>
								)}
							</StyledGrid>
						))}
					</Grid>
				</Paper>
			</Paper>
		</Paper>
	);
}
