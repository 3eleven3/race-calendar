import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import { useAppState } from "./state";

export const App = () => {
	const { state } = useAppState();

	return (
		<HStack>
			<Button>Click me</Button>
			<Button>Click me</Button>
		</HStack>
	);
};
