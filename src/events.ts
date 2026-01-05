export type Event = {
	name: string;
	date: Date;
	state: string;
	city: string;
	type: "road" | "trail";
	distances: string[];
	url: string;
	going: string[];
};

const today = new Date();
today.setHours(0, 0, 0, 0);

const events: Event[] = ([
	{
		name: "Wild Goose",
		date: new Date("2026-9-19"),
		state: "NJ",
		city: "Wawayanda State Park",
		type: "trail" as const,
		distances: [
			"36 hours",
			"100 miles",
			"100 km",
			"50 miles",
			"50 km",
			"half marathon",
			"10 km",
		],
		url: "https://www.sassquadtrailrunning.com/wildgoose",
		going: ["Kelly F", "Cam W"],
	},
	{
		name: "Squatchywaska",
		date: new Date("2026-4-25"),
		state: "NY",
		city: "Minnewaska State Preserve",
		type: "trail" as const,
		distances: ["25 km"],
		url: "https://www.sassquadtrailrunning.com/squatchywaska",
		going: ["Emma C"],
	},
	{
		name: "Richmond Marathon",
		date: new Date("2026-11-14"),
		state: "VA",
		city: "Richmond",
		type: "road" as const,
		distances: ["26.2 miles"],
		url: "https://www.richmondmarathon.com/",
		going: ["Kelly F", "Allison D"],
	},
	// remove events that are in the past
]).filter((event) => event.date >= today);

// sort events by date
events.sort((a, b) => a.date.getTime() - b.date.getTime());

export { events };
