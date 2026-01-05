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
                                base: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #e0e7ff 100%)",
                                _dark: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e1b4b 100%)",
                        }}
                >
                        <Container w="100%" py={{ base: 4, md: 10 }} px={{ base: 2, md: 4 }}>
                                <VStack gap={{ base: 4, md: 8 }} align="stretch">
                                        <Box
                                                textAlign="center"
                                                p={{ base: 4, md: 8 }}
                                                border="1px solid"
                                                borderColor={{ base: "whiteAlpha.400", _dark: "whiteAlpha.200" }}
                                                borderRadius="2xl"
                                                bg={{ 
                                                        base: "rgba(255, 255, 255, 0.7)", 
                                                        _dark: "rgba(15, 23, 42, 0.7)" 
                                                }}
                                                shadow="xl"
                                                style={{
                                                        position: "relative",
                                                        backdropFilter: "blur(10px)",
                                                        overflow: "hidden"
                                                }}
                                        >
                                                <Box
                                                        position="absolute"
                                                        top="-50%"
                                                        left="-50%"
                                                        w="200%"
                                                        h="200%"
                                                        bgGradient="radial(circle, blue.100 0%, transparent 70%)"
                                                        opacity="0.4"
                                                        animation="pulse 8s ease-in-out infinite"
                                                        pointerEvents="none"
                                                        _dark={{
                                                                bgGradient: "radial(circle, blue.900 0%, transparent 70%)",
                                                                opacity: "0.2"
                                                        }}
                                                        style={{
                                                                "@keyframes pulse": {
                                                                        "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                                                                        "50%": { transform: "translate(5%, 5%) scale(1.1)" }
                                                                }
                                                        }}
                                                />
                                                <VStack gap={{ base: 4, md: 6 }} align="stretch" position="relative" zIndex={1}>
                                                        <Heading 
                                                                size={{ base: "xl", md: "3xl" }} 
                                                                letterSpacing="tight"
                                                                color="gray.800"
                                                                _dark={{ color: "whiteAlpha.900" }}
                                                        >
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
                                                bg={{ base: "whiteAlpha.950", _dark: "gray.900" }}
                                                shadow="xl"
                                        >
                                                {state.view === "calendar" && <Calendar />}
                                                {state.view === "list" && <List />}
                                        </Box>
                                </VStack>
                        </Container>
                </Box>
        );
};
