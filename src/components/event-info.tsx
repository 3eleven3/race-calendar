import type { FC } from "react";
import type { Event } from "@/events";
import {
	Button,
	VStack,
	DataList,
	Wrap,
	Heading,
	Badge,
	Link,
} from "@chakra-ui/react";
import { useAppState } from "../state";
import { ColoredBadge } from "./colored-badge";

const getDaysUntil = (date: Date) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const raceDate = new Date(date);
	raceDate.setHours(0, 0, 0, 0);
	const diffTime = raceDate.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

export const EventInfo: FC<{
	event: Event;
	showTitle: boolean;
}> = (props) => {
	const { state } = useAppState();
	const daysUntil = getDaysUntil(props.event.date);

	return (
		<VStack
			gap={state.isMobile ? 2 : 4}
			alignItems={"start"}
			paddingBlockStart={state.isMobile ? "0.5rem" : "1rem"}
		>
			<VStack align="start" gap={1}>
				{props.showTitle && (
					<Heading size={state.isMobile ? "md" : "lg"}>
						{props.event.name}
					</Heading>
				)}
				{daysUntil >= 0 ? (
					<Badge
						colorPalette={
							daysUntil <= 7 ? "red" : daysUntil <= 30 ? "orange" : "green"
						}
						variant="subtle"
						size="sm"
					>
						{daysUntil === 0
							? "Today!"
							: daysUntil === 1
								? "Tomorrow!"
								: `${daysUntil} days away`}
					</Badge>
				) : (
					<Badge colorPalette="gray" variant="subtle" size="sm">
						Past Event
					</Badge>
				)}
			</VStack>
			<DataList.Root
				orientation={state.isMobile ? "vertical" : "horizontal"}
				gap={state.isMobile ? 2 : 4}
			>
				<DataList.Item>
					<DataList.ItemLabel
						fontSize={state.isMobile ? "xs" : "sm"}
						color={{ base: "gray.800", _dark: "gray.200" }}
						fontWeight="bold"
					>
						Location
					</DataList.ItemLabel>
					<DataList.ItemValue fontSize={state.isMobile ? "xs" : "sm"}>
						{props.event.city}, {props.event.state}
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel
						fontSize={state.isMobile ? "xs" : "sm"}
						color={{ base: "gray.800", _dark: "gray.200" }}
						fontWeight="bold"
					>
						Type
					</DataList.ItemLabel>
					<DataList.ItemValue
						fontSize={state.isMobile ? "xs" : "sm"}
						textTransform="capitalize"
					>
						{props.event.type}
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel
						fontSize={state.isMobile ? "xs" : "sm"}
						color={{ base: "gray.800", _dark: "gray.200" }}
						fontWeight="bold"
					>
						Distances
					</DataList.ItemLabel>
					<DataList.ItemValue>
						<Wrap gap={1}>
							{props.event.distances.map((distance) => (
								<ColoredBadge key={distance}>{distance}</ColoredBadge>
							))}
						</Wrap>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel
						fontSize={state.isMobile ? "xs" : "sm"}
						color={{ base: "gray.800", _dark: "gray.200" }}
						fontWeight="bold"
					>
						Attending
					</DataList.ItemLabel>
					<DataList.ItemValue>
						<Wrap gap={1}>
							{props.event.going.map((who) => (
								<ColoredBadge key={who}>{who}</ColoredBadge>
							))}
						</Wrap>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel
						fontSize={state.isMobile ? "xs" : "sm"}
						color={{ base: "gray.800", _dark: "gray.200" }}
						fontWeight="bold"
					>
						Website
					</DataList.ItemLabel>
					<DataList.ItemValue fontSize={state.isMobile ? "xs" : "sm"}>
						<Link
							href={props.event.url}
							color="blue.500"
							_hover={{ textDecoration: "underline" }}
							target="_blank"
							rel="noopener noreferrer"
						>
							{
								props.event.url
									.replace(/^https?:\/\/(www\.)?/, "")
									.split("/")[0]
							}
						</Link>
					</DataList.ItemValue>
				</DataList.Item>
			</DataList.Root>
		</VStack>
	);
};
