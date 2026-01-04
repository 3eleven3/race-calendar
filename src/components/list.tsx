import { FC, Fragment } from "react";
import {
	Icon,
	Timeline,
	DataList,
	Button,
	VStack,
	Wrap,
} from "@chakra-ui/react";
import { LuMountain } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { useAppState } from "../state";
import { ColoredBadge } from "./colored-badge";

export const List: FC = () => {
	const { state } = useAppState();

	return (
		<Timeline.Root size={"xl"}>
			{state.events.map((event, index) => (
				<Fragment key={event.name}>
					<Timeline.Item>
						{!state.isMobile && (
							<Timeline.Content width="auto">
								<Timeline.Title whiteSpace="nowrap">
									{event.date.toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}
								</Timeline.Title>
							</Timeline.Content>
						)}
						<Timeline.Connector>
							<Timeline.Separator />
							<Timeline.Indicator>
								<Icon fontSize="md">
									{event.type === "road" ? <TbRoad /> : <LuMountain />}
								</Icon>
							</Timeline.Indicator>
						</Timeline.Connector>
						<Timeline.Content>
							<Timeline.Title fontSize="lg" fontWeight="bold">
								{event.name}
							</Timeline.Title>
							<VStack
								gap={4}
								alignItems={state.isMobile ? "center" : "start"}
								paddingBlockStart="1rem"
							>
								<DataList.Root orientation="horizontal">
									<DataList.Item>
										<DataList.ItemLabel>Location</DataList.ItemLabel>
										<DataList.ItemValue>
											{event.city} - {event.state}
										</DataList.ItemValue>
									</DataList.Item>
									{state.isMobile && (
										<DataList.Item>
											<DataList.ItemLabel>Date</DataList.ItemLabel>
											<DataList.ItemValue>
												{event.date.toLocaleDateString("en-US", {
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
												{event.distances.map((distance) => (
													<ColoredBadge key={distance}>{distance}</ColoredBadge>
												))}
											</Wrap>
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Attending</DataList.ItemLabel>
										<DataList.ItemValue>
											<Wrap>
												{event.going.map((who) => (
													<ColoredBadge key={who}>{who}</ColoredBadge>
												))}
											</Wrap>
										</DataList.ItemValue>
									</DataList.Item>
								</DataList.Root>
								<Button asChild variant="ghost">
									<a href={event.url} target="_blank">
										More information
									</a>
								</Button>
							</VStack>
						</Timeline.Content>
					</Timeline.Item>
					{index !== state.events.length - 1 && <Timeline.Connector />}
				</Fragment>
			))}
		</Timeline.Root>
	);
};
