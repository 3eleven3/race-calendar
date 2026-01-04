import { Container, Box, Heading, VStack, Flex } from "@chakra-ui/react";
import { useAppState } from "./state";
import { ColorModeButton } from "./components/ui/color-mode";
import "./App.css";
import { Calendar } from "./components/calendar";
import { List } from "./components/list";
import { ViewButton } from "./components/view-button";

export const App = () => {
	const { state } = useAppState();

	return (
		<Container w="100%" py={10}>
			<VStack gap={8} align="stretch">
				<Box
					textAlign="center"
					py={8}
					bg={{ base: "blue.50", _dark: "blue.900/20" }}
					borderRadius="2xl"
					border="1px solid"
					borderColor={{ base: "blue.100", _dark: "blue.800/30" }}
					style={{
						position: "relative",
					}}
				>
					<VStack gap={6} align="stretch">
						<Heading
							size="3xl"
							color={{ base: "blue.600", _dark: "blue.400" }}
							letterSpacing="tight"
						>
							KRC/ORC Race Calendar
						</Heading>
						<div
							style={{
								position: "absolute",
								top: "1rem",
								right: "1rem",
							}}
						>
							<ColorModeButton />
						</div>
						<ViewButton />
					</VStack>
				</Box>
				<Box
					p={8}
					border="1px solid"
					borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
					borderRadius="2xl"
					bg={{ base: "white", _dark: "whiteAlpha.50" }}
					shadow="sm"
				>
					{state.view === "calendar" && <Calendar />}
					{state.view === "list" && <List />}
				</Box>
			</VStack>
		</Container>
	);
};
