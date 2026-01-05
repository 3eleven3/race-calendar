import { Container, Box, Heading, VStack, Flex } from "@chakra-ui/react";
import { useAppState } from "./state";
import { ColorModeButton } from "./components/ui/color-mode";
import { Calendar } from "./components/calendar";
import { List } from "./components/list";
import { ViewButton } from "./components/view-button";

export const App = () => {
        const { state } = useAppState();

        return (
                <Box
                        minH="100vh"
                        bg={{
                                base: "radial-gradient(circle at 50% 50%, #fdfbfb 0%, #ebedee 100%)",
                                _dark: "gray.950",
                        }}
                >
                        <Container w="100%" py={{ base: 4, md: 10 }} px={{ base: 2, md: 4 }}>
                                <VStack gap={{ base: 4, md: 8 }} align="stretch">
                                        <Box
                                                textAlign="center"
                                                p={{ base: 4, md: 8 }}
                                                border="1px solid"
                                                borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
                                                borderRadius="2xl"
                                                bg={{ base: "whiteAlpha.900", _dark: "whiteAlpha.100" }}
                                                shadow="xl"
                                                backdropFilter="blur(10px)"
                                                style={{
                                                        position: "relative",
                                                }}
                                        >
                                                <VStack gap={{ base: 4, md: 6 }} align="stretch">
                                                        <Heading size={{ base: "xl", md: "3xl" }} letterSpacing="tight">
                                                                KRC/ORC Race Calendar
                                                        </Heading>
                                                        <div
                                                                style={{
                                                                        position: "absolute",
                                                                        bottom: "0.5rem",
                                                                        right: "0.5rem",
                                                                }}
                                                        >
                                                                <ColorModeButton />
                                                        </div>
                                                        <ViewButton />
                                                </VStack>
                                        </Box>
                                        <Box
                                                p={{ base: 3, md: 8 }}
                                                border="1px solid"
                                                borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
                                                borderRadius="2xl"
                                                bg={{ base: "whiteAlpha.900", _dark: "whiteAlpha.100" }}
                                                shadow="xl"
                                                backdropFilter="blur(10px)"
                                        >
                                                {state.view === "calendar" && <Calendar />}
                                                {state.view === "list" && <List />}
                                        </Box>
                                </VStack>
                        </Container>
                </Box>
        );
};
