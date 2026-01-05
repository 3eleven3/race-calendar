import { useMemo } from "react";
import type { FC } from "react";
import {
	Heading,
	Separator,
	Text,
	VStack,
	Grid,
	Box,
	Button,
	Center,
	HStack,
	IconButton,
	Card,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useImmer } from "use-immer";
import { useAppState } from "../state";
import type { Event } from "../events";
import { EventButton } from "./event-button";
import { EventInfo } from "./event-info";

export const Calendar: FC = () => {
	const { state } = useAppState();
	const [calendarState, setCalendarState] = useImmer<{
		displayMonth: number;
		displayYear: number;
		selectedEvent: null | Event;
	}>({
		displayMonth: new Date().getMonth(),
		displayYear: new Date().getFullYear(),
		selectedEvent: null,
	});

	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();

	// Get first and last day of the displayed month
	const firstDay = new Date(
		calendarState.displayYear,
		calendarState.displayMonth,
		1,
	);
	const startDate = new Date(firstDay.getTime());
	startDate.setDate(startDate.getDate() - firstDay.getDay());

	// Create calendar grid
	const calendarDays = useMemo(() => {
		const days: Date[] = [];
		const date = new Date(startDate.getTime());
		while (days.length < 42) {
			days.push(new Date(date.getTime()));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}, [startDate]);

	// Map events by date
	const eventsByDate = useMemo(() => {
		const map = new Map<string, (typeof state.events)[number][]>();
		state.events.forEach((event) => {
			const dateStr = event.date.toDateString();
			if (!map.has(dateStr)) {
				map.set(dateStr, []);
			}
			(map.get(dateStr) ?? []).push(event);
		});
		return map;
	}, [state.events]);

	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthName = firstDay.toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	const handlePreviousMonth = () => {
		setCalendarState((draft) => {
			if (draft.displayMonth === 0) {
				draft.displayMonth = 11;
				draft.displayYear -= 1;
			} else {
				draft.displayMonth -= 1;
			}
		});
	};

	const handleNextMonth = () => {
		setCalendarState((draft) => {
			if (draft.displayMonth === 11) {
				draft.displayMonth = 0;
				draft.displayYear += 1;
			} else {
				draft.displayMonth += 1;
			}
		});
	};

	const handleToday = () => {
		setCalendarState((draft) => {
			draft.displayMonth = currentMonth;
			draft.displayYear = currentYear;
		});
	};

	if (calendarState.selectedEvent) {
		return (
			<>
				<Button
					mb={4}
					variant="outline"
					onClick={() => {
						setCalendarState((draft) => {
							draft.selectedEvent = null;
						});
					}}
				>
					Back to Calendar
				</Button>
				<EventInfo event={calendarState.selectedEvent} showTitle={true} />
			</>
		);
	}

	return (
		<VStack gap={6} align="stretch">
			<Box>
				<HStack justify="center" mb={4}>
					<IconButton
						aria-label="Previous month"
						onClick={handlePreviousMonth}
						variant="ghost"
						size="md"
					>
						<LuChevronLeft />
					</IconButton>
					<Button size="sm" variant="outline" onClick={handleToday} mx={2}>
						Today
					</Button>
					<IconButton
						aria-label="Next month"
						onClick={handleNextMonth}
						variant="ghost"
						size="md"
					>
						<LuChevronRight />
					</IconButton>
				</HStack>
				<Heading size="md" letterSpacing="tight" textAlign="center" mb={4}>
					{monthName}
				</Heading>
				<Separator opacity={0.5} />
			</Box>
			<Grid templateColumns="repeat(7, 1fr)" gap={2}>
				{/* Week day headers */}
				{weekDays.map((day) => (
					<Center key={day} fontWeight="bold" py={2} fontSize="sm">
						{day}
					</Center>
				))}
				{/* Calendar days */}
				{calendarDays.map((day) => {
					const isDisplayMonth = day.getMonth() === calendarState.displayMonth;
					const isToday = day.toDateString() === today.toDateString();
					const dayEvents = eventsByDate.get(day.toDateString()) || [];

					return (
						<Box
							key={day.toISOString()}
							minH="120px"
							p={2}
							border="1px solid"
							borderColor={{
								base: "gray.200",
								_dark: "whiteAlpha.200",
							}}
							borderRadius="lg"
							bg={
								isToday
									? { base: "blue.50", _dark: "blue.900/20" }
									: isDisplayMonth
										? { base: "white", _dark: "whiteAlpha.50" }
										: { base: "gray.50", _dark: "whiteAlpha.100/20" }
							}
							opacity={isDisplayMonth ? 1 : 0.5}
						>
							<VStack gap={1} align="stretch" h="100%">
								<Text
									fontSize="sm"
									fontWeight={isToday ? "bold" : "normal"}
									color={
										isToday
											? { base: "blue.600", _dark: "blue.400" }
											: "inherit"
									}
								>
									{day.getDate()}
								</Text>
								<VStack gap={1} flex={1} align="stretch">
									{dayEvents.map((event) => (
										<EventButton
											key={event.name}
											event={event}
											onClick={() => {
												setCalendarState((draft) => {
													draft.selectedEvent = event;
												});
											}}
										/>
									))}
								</VStack>
							</VStack>
						</Box>
					);
				})}
			</Grid>
		</VStack>
	);
};
