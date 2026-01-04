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

const events: Event[] = [
	{
		name: "Wild Goose",
		date: new Date("2026-9-19"),
		state: "NJ",
		city: "Wawayanda State Park",
		type: "trail",
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
		type: "trail",
		distances: ["25 km"],
		url: "https://www.sassquadtrailrunning.com/squatchywaska",
		going: ["Emma C"],
	},
];

// sort events by date
events.sort((a, b) => a.date.getTime() - b.date.getTime());

export { events };
