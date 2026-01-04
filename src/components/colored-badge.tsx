import { Badge } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

import { FC } from "react";

interface ColoredBadgeProps {
	children: string;
	size?: "sm" | "md" | "lg";
}

export const ColoredBadge: FC<ColoredBadgeProps> = ({
	children,
	size = "lg",
}) => {
	// Generate a hue based on the hash of the text
	let hash = 0;
	for (let i = 0; i < children.length; i++) {
		hash = children.charCodeAt(i) + ((hash << 5) - hash);
	}
	const hue = Math.abs(hash) % 360;
	// Adjust colors based on color mode
	const bgColor = useColorModeValue(
		`hsl(${hue}, 30%, 90%)`,
		`hsl(${hue}, 30%, 20%)`,
	);

	return (
		<Badge size={size} bg={bgColor} color={"var(--chakra-colors-fg)"}>
			{children}
		</Badge>
	);
};
