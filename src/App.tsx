import { Container, Box, Heading, Text, VStack, Separator, Flex } from "@chakra-ui/react";
import { useAppState } from "./state";
import { ColorModeButton } from "./components/ui/color-mode";
import "./App.css";

export const App = () => {
        const { state } = useAppState();

        return (
                <Container maxW="container.md" py={10}>
                        <Flex justify="flex-end" mb={4}>
                                <ColorModeButton />
                        </Flex>
                        <VStack gap={8} align="stretch">
                                <Box
                                        textAlign="center"
                                        py={12}
                                        bg={{ base: "blue.50", _dark: "blue.900/20" }}
                                        borderRadius="2xl"
                                        border="1px solid"
                                        borderColor={{ base: "blue.100", _dark: "blue.800/30" }}
                                >
                                        <Heading size="3xl" color={{ base: "blue.600", _dark: "blue.400" }} letterSpacing="tight">
                                                Race Calendar
                                        </Heading>
                                        <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }} mt={3}>
                                                Plan your season, track your progress.
                                        </Text>
                                </Box>

                                <Box
                                        p={8}
                                        border="1px solid"
                                        borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
                                        borderRadius="2xl"
                                        bg={{ base: "white", _dark: "whiteAlpha.50" }}
                                        shadow="sm"
                                >
                                        <Heading size="md" mb={6} letterSpacing="tight">
                                                Upcoming Races
                                        </Heading>
                                        <Separator mb={6} opacity={0.5} />
                                        <Text color="gray.500" fontStyle="italic" textAlign="center" py={4}>
                                                No races scheduled yet. Start by adding one to your calendar!
                                        </Text>
                                </Box>

                                <Box
                                        p={8}
                                        border="1px solid"
                                        borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
                                        borderRadius="2xl"
                                        bg={{ base: "white", _dark: "whiteAlpha.50" }}
                                        shadow="sm"
                                >
                                        <Heading size="md" mb={6} letterSpacing="tight">
                                                Training Stats
                                        </Heading>
                                        <Separator mb={6} opacity={0.5} />
                                        <Text color={{ base: "gray.700", _dark: "gray.300" }}>
                                                Your training summary will appear here once you start logging activities.
                                        </Text>
                                </Box>
                        </VStack>
                </Container>
        );
};
