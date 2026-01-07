import { type FC, Fragment } from "react";
import { Icon, Timeline } from "@chakra-ui/react";
import { LuMountain } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { useAppState } from "../state";
import { EventInfo } from "./event-info";

export const List: FC = () => {
	const { state } = useAppState();

	// Precompute formatted date strings to measure the longest date string; use that to set min widths so timeline lines align
	const formattedDates = state.events.map((e) =>
		e.date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}),
	);
	const maxDateLength = Math.max(...formattedDates.map((s) => s.length), 0);

	return (
		<Timeline.Root size={"xl"}>
			{state.events.map((event, index) => {
				return (
					<Fragment key={event.name}>
						<Timeline.Item>
							{!state.isMobile && (
								<Timeline.Content width="auto" minW={`${maxDateLength}ch`}>
									<Timeline.Title whiteSpace="nowrap">
										{event.date.toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</Timeline.Title>
								</Timeline.Content>
							)}
							<Timeline.Connector
								borderColor={{ base: "gray.200", _dark: "whiteAlpha.300" }}
							>
								<Timeline.Separator />
								<Timeline.Indicator
									bg={{ base: "white", _dark: "gray.800" }}
									borderColor={{ base: "gray.200", _dark: "whiteAlpha.300" }}
								>
									<Icon
										fontSize="md"
										color={{ base: "gray.600", _dark: "gray.400" }}
									>
										{event.type === "road" ? <TbRoad /> : <LuMountain />}
									</Icon>
								</Timeline.Indicator>
							</Timeline.Connector>
							<Timeline.Content>
								<Timeline.Title
									fontSize={{
										base: "md",
										md: "lg",
									}}
									fontWeight="bold"
								>
									{event.name}
								</Timeline.Title>
								{state.isMobile && (
									<Timeline.Description
										fontSize="xs"
										color="fg.muted"
										mb={1}
										minW={`${maxDateLength}ch`}
										whiteSpace="nowrap"
									>
										{event.date.toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</Timeline.Description>
								)}
								<EventInfo event={event} showTitle={false} />
							</Timeline.Content>
						</Timeline.Item>
						{index !== state.events.length - 1 && (
							<Timeline.Connector
								borderColor={{ base: "gray.200", _dark: "whiteAlpha.300" }}
							/>
						)}
					</Fragment>
				);
			})}
		</Timeline.Root>
	);
};
