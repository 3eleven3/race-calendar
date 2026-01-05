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
                                                color={{ base: "gray.800", _dark: "gray.200" }}
                                                fontWeight="bold"
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
                                                color={{ base: "gray.800", _dark: "gray.200" }}
                                                fontWeight="bold"
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
                                                color={{ base: "gray.800", _dark: "gray.200" }}
                                                fontWeight="bold"
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
                                                color={{ base: "gray.800", _dark: "gray.200" }}
                                                fontWeight="bold"
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
                                <DataList.Item>
                                        <DataList.ItemLabel
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                                color={{ base: "gray.800", _dark: "gray.200" }}
                                                fontWeight="bold"
                                        >
                                                Website
                                        </DataList.ItemLabel>
                                        <DataList.ItemValue
                                                fontSize={
                                                        state.isMobile
                                                                ? "xs"
                                                                : "sm"
                                                }
                                        >
                                                <Button
                                                        asChild
                                                        variant="link"
                                                        size="sm"
                                                        colorPalette="blue"
                                                        fontWeight="semibold"
                                                        textDecoration="underline"
                                                        textDecorationThickness="2px"
                                                        textUnderlineOffset="2px"
                                                        justifyContent="start"
                                                        height="auto"
                                                        p={0}
                                                        _hover={{
                                                                color: "blue.600",
                                                                textDecorationThickness: "3px"
                                                        }}
                                                >
                                                        <a href={props.event.url} target="_blank" rel="noreferrer">
                                                                {props.event.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
                                                        </a>
                                                </Button>
                                        </DataList.ItemValue>
                                </DataList.Item>
                        </DataList.Root>
                </VStack>
        );
};
