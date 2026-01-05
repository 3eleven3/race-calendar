import { Container, Box, Heading, VStack } from "@chakra-ui/react";
import { useAppState } from "./state";
import { ColorModeButton } from "./components/ui/color-mode";
import { List } from "./components/list";
import { useState, useEffect } from "react";

export const App = () => {
        const { state } = useAppState();
        const [prefix, setPrefix] = useState("K");

        useEffect(() => {
                const interval = setInterval(() => {
                        setPrefix((prev) => (prev === "K" ? "O" : "K"));
                }, 3000);
                return () => clearInterval(interval);
        }, []);

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
                                                borderColor={{ base: "gray.200", _dark: "whiteAlpha.200" }}
                                                borderRadius="2xl"
                                                bg={{ base: "white", _dark: "gray.900" }}
                                                shadow="xl"
                                                position="relative"
                                        >
                                                <VStack gap={{ base: 4, md: 6 }} align="stretch">
                                                        <Heading
                                                                size={{ base: "xl", md: "3xl" }}
                                                                letterSpacing="tight"
                                                                display="flex"
                                                                justifyContent="center"
                                                                alignItems="center"
                                                                gap="0"
                                                                transition="color 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                                                color={prefix === "K" ? "blue.600" : "orange.500"}
                                                                _dark={{
                                                                        color: prefix === "K" ? "blue.400" : "orange.400",
                                                                }}
                                                        >
                                                                <Box
                                                                        as="span"
                                                                        display="inline-flex"
                                                                        alignItems="center"
                                                                        justifyContent="center"
                                                                        width="auto"
                                                                        height="1.2em"
                                                                        transition="all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                                                        transform={prefix === "K" ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(1.1)"}
                                                                        textShadow={prefix === "K" ? "0 0 10px rgba(59, 130, 246, 0.3)" : "0 0 10px rgba(249, 115, 22, 0.3)"}
                                                                >
                                                                        {prefix}
                                                                </Box>
                                                                <Box
                                                                        as="span"
                                                                        transition="text-shadow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                                                        textShadow={prefix === "K" ? "0 0 10px rgba(59, 130, 246, 0.1)" : "0 0 10px rgba(249, 115, 22, 0.1)"}
                                                                >
                                                                        RC Race Calendar
                                                                </Box>
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
                                                <List />
                                        </Box>
                                </VStack>
                        </Container>
                </Box>
        );
};
