import { FC, Fragment } from "react";
import {
  Icon,
  Timeline,
  Badge,
  DataList,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { LuMountain } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { useAppState } from "../state";

export const List: FC = () => {
  const { state } = useAppState();

  return (
    <Timeline.Root size={"xl"}>
      {state.events.map((event, index) => (
        <Fragment key={event.name}>
          <Timeline.Item>
            <Timeline.Content width="auto">
              <Timeline.Title whiteSpace="nowrap">
                {event.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Timeline.Title>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Icon fontSize="md">
                  {event.type === "road" ? <TbRoad /> : <LuMountain />}
                </Icon>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>{event.name}</Timeline.Title>
              <VStack gap={4} alignItems={"start"}>
                <DataList.Root orientation="horizontal">
                  <DataList.Item>
                    <DataList.ItemLabel>Location</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {event.city} - {event.state}
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Type</DataList.ItemLabel>
                    <DataList.ItemValue>{event.type}</DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Distances</DataList.ItemLabel>
                    <DataList.ItemValue>
                      <HStack gap={2}>
                        {event.distances.map((distance) => (
                          <Badge key={distance} size="lg">
                            {distance}
                          </Badge>
                        ))}
                      </HStack>
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Attending</DataList.ItemLabel>
                    <DataList.ItemValue>
                      <HStack gap={2}>
                        {event.going.map((who) => (
                          <Badge key={who} size="lg">
                            {who}
                          </Badge>
                        ))}
                      </HStack>
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
