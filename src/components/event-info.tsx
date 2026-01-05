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
                        gap={state.isMobile ? 2 : 4}
                        alignItems={"start"}
                        paddingBlockStart={state.isMobile ? "0.5rem" : "1rem"}
                >
                        {props.showTitle && (
                                <Heading size={state.isMobile ? "md" : "lg"}>
                                        {props.event.name}
                                </Heading>
                        )}
                        <DataList.Root
                                orientation={
                                        state.isMobile
                                                ? "vertical"
                                                : "horizontal"
                                }
                                gap={state.isMobile ? 2 : 4}
                        >
                                <DataList.Item>
                                        <DataList.ItemLabel
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                Location
                                        </DataList.ItemLabel>
                                        <DataList.ItemValue
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                {props.event.city},{" "}
                                                {props.event.state}
                                        </DataList.ItemValue>
                                </DataList.Item>
                                <DataList.Item>
                                        <DataList.ItemLabel
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                Type
                                        </DataList.ItemLabel>
                                        <DataList.ItemValue
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                                textTransform="capitalize"
                                        >
                                                {props.event.type}
                                        </DataList.ItemValue>
                                </DataList.Item>
                                <DataList.Item>
                                        <DataList.ItemLabel
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                Distances
                                        </DataList.ItemLabel>
                                        <DataList.ItemValue>
                                                <Wrap gap={1}>
                                                        {props.event.distances.map(
                                                                (distance) => (
                                                                        <ColoredBadge
                                                                                key={
                                                                                        distance
                                                                                }
                                                                        >
                                                                                {
                                                                                        distance
                                                                                }
                                                                        </ColoredBadge>
                                                                ),
                                                        )}
                                                </Wrap>
                                        </DataList.ItemValue>
                                </DataList.Item>
                                <DataList.Item>
                                        <DataList.ItemLabel
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                Attending
                                        </DataList.ItemLabel>
                                        <DataList.ItemValue>
                                                <Wrap gap={1}>
                                                        {props.event.going.map(
                                                                (who) => (
                                                                        <ColoredBadge
                                                                                key={
                                                                                        who
                                                                                }
                                                                        >
                                                                                {
                                                                                        who
                                                                                }
                                                                        </ColoredBadge>
                                                                ),
                                                        )}
                                                </Wrap>
                                        </DataList.ItemValue>
                                </DataList.Item>
                        </DataList.Root>
                        <Button
                                asChild
                                variant="ghost"
                                size={state.isMobile ? "sm" : "md"}
                        >
                                <a href={props.event.url} target="_blank">
                                        More information
                                </a>
                        </Button>
                </VStack>
        );
};
