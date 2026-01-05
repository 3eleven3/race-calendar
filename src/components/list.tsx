import { type FC, Fragment } from "react";
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
import { EventInfo } from "./event-info";

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
                                                        <Timeline.Title fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                                                                {event.name}
                                                        </Timeline.Title>
                                                        {state.isMobile && (
                                                                <Timeline.Description fontSize="xs" color="fg.muted" mb={1}>
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
                                        {index !== state.events.length - 1 && <Timeline.Connector />}
                                </Fragment>
                        ))}
                </Timeline.Root>
        );
};
