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
import { FaRunning } from "react-icons/fa";

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
                selectedDay: string | null;
        }>({
                displayMonth: new Date().getMonth(),
                displayYear: new Date().getFullYear(),
                selectedEvent: null,
                selectedDay: null,
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
                                        size={state.isMobile ? "sm" : "md"}
                                        onClick={() => {
                                                setCalendarState((draft) => {
                                                        draft.selectedEvent =
                                                                null;
                                                });
                                        }}
                                >
                                        Back to{" "}
                                        {calendarState.selectedDay
                                                ? "Day View"
                                                : "Calendar"}
                                </Button>
                                <EventInfo
                                        event={calendarState.selectedEvent}
                                        showTitle={true}
                                />
                        </>
                );
        }

        if (state.isMobile && calendarState.selectedDay) {
                const dayEvents =
                        eventsByDate.get(calendarState.selectedDay) || [];
                const selectedDate = new Date(calendarState.selectedDay);
                return (
                        <VStack gap={4} align="stretch">
                                <HStack justify="space-between">
                                        <Heading size="md">
                                                {selectedDate.toLocaleDateString(
                                                        "en-US",
                                                        {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                        },
                                                )}
                                        </Heading>
                                        <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => {
                                                        setCalendarState(
                                                                (draft) => {
                                                                        draft.selectedDay =
                                                                                null;
                                                                },
                                                        );
                                                }}
                                        >
                                                Back to Calendar
                                        </Button>
                                </HStack>
                                <Separator />
                                {dayEvents.length > 0 ? (
                                        <VStack gap={4} align="stretch">
                                                {dayEvents.map((event) => (
                                                        <Box
                                                                key={event.name}
                                                                p={4}
                                                                border="1px solid"
                                                                borderColor={{
                                                                        base: "gray.200",
                                                                        _dark: "whiteAlpha.200",
                                                                }}
                                                                borderRadius="lg"
                                                                onClick={() => {
                                                                        setCalendarState(
                                                                                (
                                                                                        draft,
                                                                                ) => {
                                                                                        draft.selectedEvent =
                                                                                                event;
                                                                                },
                                                                        );
                                                                }}
                                                        >
                                                                <Heading
                                                                        size="sm"
                                                                        mb={2}
                                                                >
                                                                        {
                                                                                event.name
                                                                        }
                                                                </Heading>
                                                                <EventInfo
                                                                        event={
                                                                                event
                                                                        }
                                                                        showTitle={
                                                                                false
                                                                        }
                                                                />
                                                        </Box>
                                                ))}
                                        </VStack>
                                ) : (
                                        <Center py={10}>
                                                <Text color="fg.muted">
                                                        No events for this day
                                                </Text>
                                        </Center>
                                )}
                        </VStack>
                );
        }

        return (
                <Box maxW="800px" mx="auto" w="100%">
                        <VStack gap={{ base: 4, md: 6 }} align="stretch">
                                <Box>
                                        <HStack
                                                justify="center"
                                                mb={{ base: 2, md: 4 }}
                                        >
                                                <IconButton
                                                        aria-label="Previous month"
                                                        onClick={handlePreviousMonth}
                                                        variant="ghost"
                                                        size={{ base: "sm", md: "md" }}
                                                >
                                                        <LuChevronLeft />
                                                </IconButton>
                                                <Button
                                                        size="xs"
                                                        variant="outline"
                                                        onClick={handleToday}
                                                        mx={2}
                                                >
                                                        Today
                                                </Button>
                                                <IconButton
                                                        aria-label="Next month"
                                                        onClick={handleNextMonth}
                                                        variant="ghost"
                                                        size={{ base: "sm", md: "md" }}
                                                >
                                                        <LuChevronRight />
                                                </IconButton>
                                        </HStack>
                                        <Heading
                                                size={{ base: "sm", md: "md" }}
                                                letterSpacing="tight"
                                                textAlign="center"
                                                mb={{ base: 2, md: 4 }}
                                        >
                                                {monthName}
                                        </Heading>
                                        <Separator opacity={0.5} />
                                </Box>
                                <Grid
                                        templateColumns="repeat(7, 1fr)"
                                        gap={{ base: 1, md: 2 }}
                                >
                                        {/* Week day headers */}
                                        {weekDays.map((day) => (
                                                <Center
                                                        key={day}
                                                        fontWeight="bold"
                                                        py={2}
                                                        fontSize={{
                                                                base: "xs",
                                                                md: "sm",
                                                        }}
                                                >
                                                        {state.isMobile
                                                                ? day.charAt(0)
                                                                : day}
                                                </Center>
                                        ))}
                                        {/* Calendar days */}
                                        {calendarDays.map((day) => {
                                                const isDisplayMonth =
                                                        day.getMonth() ===
                                                        calendarState.displayMonth;
                                                const isToday =
                                                        day.toDateString() ===
                                                        today.toDateString();
                                                const dayEvents =
                                                        eventsByDate.get(
                                                                day.toDateString(),
                                                        ) || [];

                                                return (
                                                        <Box
                                                                key={day.toISOString()}
                                                                flex="1"
                                                                aspectRatio="1 / 1"
                                                                p={{ base: 1, md: 2 }}
                                                        border="1px solid"
                                                        borderColor={
                                                                state.isMobile &&
                                                                calendarState.selectedDay ===
                                                                        day.toDateString()
                                                                        ? {
                                                                                  base: "blue.500",
                                                                                  _dark: "blue.400",
                                                                          }
                                                                        : {
                                                                                  base: "gray.200",
                                                                                  _dark: "whiteAlpha.200",
                                                                          }
                                                        }
                                                        borderRadius="lg"
                                                        cursor="pointer"
                                                        onClick={() => {
                                                                if (
                                                                        state.isMobile
                                                                ) {
                                                                        setCalendarState(
                                                                                (
                                                                                        draft,
                                                                                ) => {
                                                                                        draft.selectedDay =
                                                                                                day.toDateString();
                                                                                },
                                                                        );
                                                                }
                                                        }}
                                                        bg={
                                                                isToday
                                                                        ? {
                                                                                  base: "blue.50",
                                                                                  _dark: "blue.900/20",
                                                                          }
                                                                        : isDisplayMonth
                                                                          ? {
                                                                                    base: "white",
                                                                                    _dark: "whiteAlpha.50",
                                                                            }
                                                                          : {
                                                                                    base: "gray.50",
                                                                                    _dark: "whiteAlpha.100/20",
                                                                            }
                                                        }
                                                        opacity={
                                                                isDisplayMonth
                                                                        ? 1
                                                                        : 0.5
                                                        }
                                                >
                                                        <VStack
                                                                gap={1}
                                                                align="stretch"
                                                                h="100%"
                                                        >
                                                                <Text
                                                                        fontSize="sm"
                                                                        fontWeight={
                                                                                isToday
                                                                                        ? "bold"
                                                                                        : "normal"
                                                                        }
                                                                        color={
                                                                                isToday
                                                                                        ? {
                                                                                                  base: "blue.600",
                                                                                                  _dark: "blue.400",
                                                                                          }
                                                                                        : "inherit"
                                                                        }
                                                                >
                                                                        {day.getDate()}
                                                                </Text>
                                                                <VStack
                                                                        gap={1}
                                                                        flex={1}
                                                                        align="stretch"
                                                                        justify="center"
                                                                >
                                                                        {state.isMobile
                                                                                ? dayEvents.length >
                                                                                          0 && (
                                                                                          <Center>
                                                                                                  <Box
                                                                                                          p={
                                                                                                                  1.5
                                                                                                          }
                                                                                                          borderRadius="md"
                                                                                                          bg={
                                                                                                                  isToday
                                                                                                                          ? "blue.500"
                                                                                                                          : "gray.100"
                                                                                                          }
                                                                                                          color={
                                                                                                                  isToday
                                                                                                                          ? "white"
                                                                                                                          : "gray.600"
                                                                                                          }
                                                                                                          boxShadow="sm"
                                                                                                  >
                                                                                                          <FaRunning size="14px" />
                                                                                                  </Box>
                                                                                          </Center>
                                                                                  )
                                                                                : dayEvents.map(
                                                                                          (
                                                                                                  event,
                                                                                          ) => (
                                                                                                  <EventButton
                                                                                                          key={
                                                                                                                  event.name
                                                                                                          }
                                                                                                          event={
                                                                                                                  event
                                                                                                          }
                                                                                                          onClick={() => {
                                                                                                                  setCalendarState(
                                                                                                                          (
                                                                                                                                  draft,
                                                                                                                          ) => {
                                                                                                                                  draft.selectedEvent =
                                                                                                                                          event;
                                                                                                                          },
                                                                                                                  );
                                                                                                          }}
                                                                                                  />
                                                                                          ),
                                                                                  )}
                                                                </VStack>
                                                        </VStack>
                                                </Box>
                                        );
                                })}
                        </Grid>
                </VStack>
        </Box>
);
};
