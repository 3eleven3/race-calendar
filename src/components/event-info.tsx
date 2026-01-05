import { FC } from "react";
import type { Event } from "@/events";
import { Button, VStack, DataList, Wrap, Heading } from "@chakra-ui/react";
import { useAppState } from "../state";
import { ColoredBadge } from "./colored-badge";

export const EventInfo: FC<{
	event: Event;
	showTitle: boolean;
}> = (props) => {
	const { state } = useAppState();

	return (
		<VStack
			gap={4}
			alignItems={state.isMobile ? "center" : "start"}
			paddingBlockStart="1rem"
		>
			{props.showTitle && <Heading>{props.event.name}</Heading>}
			<DataList.Root orientation="horizontal">
				<DataList.Item>
					<DataList.ItemLabel>Location</DataList.ItemLabel>
					<DataList.ItemValue>
						{props.event.city} - {props.event.state}
					</DataList.ItemValue>
				</DataList.Item>
				{state.isMobile && (
					<DataList.Item>
						<DataList.ItemLabel>Date</DataList.ItemLabel>
						<DataList.ItemValue>
							{props.event.date.toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</DataList.ItemValue>
					</DataList.Item>
				)}
				<DataList.Item>
					<DataList.ItemLabel>Type</DataList.ItemLabel>
					<DataList.ItemValue>{event.type}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Distances</DataList.ItemLabel>
					<DataList.ItemValue>
						<Wrap>
							{props.event.distances.map((distance) => (
								<ColoredBadge key={distance}>{distance}</ColoredBadge>
							))}
						</Wrap>
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Attending</DataList.ItemLabel>
					<DataList.ItemValue>
						<Wrap>
							{props.event.going.map((who) => (
								<ColoredBadge key={who}>{who}</ColoredBadge>
							))}
						</Wrap>
					</DataList.ItemValue>
				</DataList.Item>
			</DataList.Root>
			<Button asChild variant="ghost">
				<a href={props.event.url} target="_blank">
					More information
				</a>
			</Button>
		</VStack>
	);
};
