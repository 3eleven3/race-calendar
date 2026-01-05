import type { FC } from "react";
import { useAppState } from "../state";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";

export const ViewButton: FC = () => {
	const { state, setState } = useAppState();

	return (
		<Box w="100%">
			<ButtonGroup size="sm" variant="outline" gap={0}>
				<Button
					colorPalette={state.view === "list" && "green"}
					variant="surface"
					borderTopEndRadius={0}
					borderBottomEndRadius={0}
					onClick={() => {
						setState((s) => {
							s.view = "list";
						});
					}}
				>
					List
				</Button>
				<Button
					colorPalette={state.view === "calendar" && "green"}
					borderBottomStartRadius={0}
					borderTopStartRadius={0}
					variant="surface"
					onClick={() => {
						setState((s) => {
							s.view = "calendar";
						});
					}}
				>
					Calendar
				</Button>
			</ButtonGroup>
		</Box>
	);
};
