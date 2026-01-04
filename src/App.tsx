import { useState } from "react";
import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<HStack>
			<Button>Click me</Button>
			<Button>Click me</Button>
		</HStack>
	);
};
