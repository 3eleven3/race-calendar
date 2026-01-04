import { Container, Box, Heading, Text, VStack, Separator } from "@chakra-ui/react";
import { useAppState } from "./state";
import "./App.css";

export const App = () => {
	const { state } = useAppState();

	return (
		<Container maxW="container.md" py={10}>
			<VStack gap={8} align="stretch">
				<Box textAlign="center" py={10} bg="blue.50" borderRadius="xl">
					<Heading size="2xl" color="blue.600">
						Race Calendar
					</Heading>
					<Text fontSize="lg" color="gray.600" mt={2}>
						Plan your season, track your progress.
					</Text>
				</Box>

				<Box p={6} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" shadow="sm">
					<Heading size="md" mb={4}>
						Upcoming Races
					</Heading>
					<Separator mb={4} />
					<Text color="gray.500" fontStyle="italic">
						No races scheduled yet. Start by adding one to your calendar!
					</Text>
				</Box>

				<Box p={6} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" shadow="sm">
					<Heading size="md" mb={4}>
						Training Stats
					</Heading>
					<Separator mb={4} />
					<Text>
						Your training summary will appear here once you start logging activities.
					</Text>
				</Box>
			</VStack>
		</Container>
	);
};
