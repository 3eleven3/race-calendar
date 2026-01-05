import { useColorModeValue } from "./ui/color-mode";
import type { FC } from "react";
import type { Event } from "../events";
import { Button } from "@chakra-ui/react";

export const EventButton: FC<{ event: Event; onClick: () => void }> = ({
	event,
	onClick,
}) => {
	let hash = 0;
	for (let i = 0; i < event.name.length; i++) {
		hash = event.name.charCodeAt(i) + ((hash << 5) - hash);
	}
	const hue = Math.abs(hash) % 360;
	const bgColor = useColorModeValue(
		`hsl(${hue}, 30%, 90%)`,
		`hsl(${hue}, 30%, 20%)`,
	);
	const textColor = useColorModeValue("black", "white");

	return (
		<Button
			size="xs"
			variant="solid"
			fontSize="xs"
			textAlign="center"
			bg={bgColor}
			color={textColor}
			onClick={onClick}
		>
			{event.name}
		</Button>
	);
};
