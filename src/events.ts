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
		distances: ["half marathon", "marathon"],
		url: "https://www.richmondmarathon.com/",
		going: ["Kelly F", "Allison D"],
	},
	{
		name: "Big Bear Squatch North",
		date: new Date("2026-4-4"),
		state: "NY",
		city: "Bear Mountain",
		type: "trail" as const,
		distances: ["half marathon", "10 km", "10K Ruck"],
		url: "https://www.sassquadtrailrunning.com/bigbearsquatchnorth",
		going: ["Cam W"],
	},{
		name: "YMCA Indoor Triathlon",
		date: new Date("2026-3-8"),
		state: "NY",
		city: "Kingston",
		type: "road" as const,
		distances: ["swim 15 minutes, bike 20 minutes, run 20 minutes"],
		url: "https://www.trisignup.com/Race/NY/Kingston/IndoorTriathlonYMCA",
		going: ["Kelly F"],
	}
	// remove events that are in the past
]).filter((event) => event.date >= today);

// sort events by date
events.sort((a, b) => a.date.getTime() - b.date.getTime());

export { events };
