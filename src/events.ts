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

const events: Event[] = [
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
		going: ["Kelly F", "Cam W", "Anna W", "Samson C"],
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
	},
	{
		name: "YMCA Indoor Triathlon",
		date: new Date("2026-3-8"),
		state: "NY",
		city: "Kingston",
		type: "road" as const,
		distances: ["swim 15 minutes, bike 20 minutes, run 20 minutes"],
		url: "https://www.trisignup.com/Race/NY/Kingston/IndoorTriathlonYMCA",
		going: ["Kelly F", "Rebecca K", "Rosibel L", "Steve S"],
	},
	{
		name: "Blue Duck Dash - Dan Mawhinney Memorial Winter Series",
		date: new Date("2026-1-25"),
		state: "NY",
		city: "Kingston",
		type: "road" as const,
		distances: ["3.5 miles"],
		url: "https://www.zippy-reg.com/online_reg/index.php?e=2381",
		going: ["Kelly F", "Cam W", "Allison D", "Emma C", "Amanda S"],
	},
	{
		name: "The Keegan Kruiser - Dan Mawhinney Memorial Winter Series",
		date: new Date("2026-2-01"),
		state: "NY",
		city: "Kingston",
		type: "road" as const,
		distances: ["4.1 miles"],
		url: "https://www.zippy-reg.com/online_reg/index.php?e=2381",
		going: ["Kelly F", "Cam W", "Allison D", "Emma C", "Amanda S"],
	},
	{
		name: "The Westkill Krusher - Dan Mawhinney Memorial Winter Series",
		date: new Date("2026-2-08"),
		state: "NY",
		city: "Westkill",
		type: "road" as const,
		distances: ["3.4 miles"],
		url: "https://www.zippy-reg.com/online_reg/index.php?e=2381",
		going: ["Kelly F", "Cam W", "Allison D", "Emma C", "Amanda S"],
	},
	{
		name: "The Union Street Stroll - Dan Mawhinney Memorial Winter Series",
		date: new Date("2026-2-15"),
		state: "NY",
		city: "Kingston",
		type: "road" as const,
		distances: ["3 miles"],
		url: "https://www.zippy-reg.com/online_reg/index.php?e=2381",
		going: ["Kelly F", "Cam W", "Allison D", "Emma C", "Amanda S"],
	},
	{
		name: "Helderberg to Hudson",
		date: new Date("2026-4-11"),
		state: "NY",
		city: "Slingerlands",
		type: "road" as const,
		distances: ["half marathon"],
		url: "https://www.areeventproductions.com/events/areep/h2h/index-main.php",
		going: ["Todd R"],
	},
	{
		name: "Philidelphia Marathon",
		date: new Date("2026-11-22"),
		state: "PA",
		city: "Philadelphia",
		type: "road" as const,
		distances: ["marathon"],
		url: "https://www.philadelphiamarathon.com",
		going: ["Todd R"],
	},
	{
		name: "Manitou's Revenge",
		date: new Date("2026-6-20"),
		state: "NY",
		city: "Catskills",
		type: "trail" as const,
		distances: ["53 miles"],
		url: "https://www.manitousrevengeultra.com/",
		going: ["Samson C", "Anna W"],
	},
	{
		name: "Hyner Trail Challenge",
		date: new Date("2026-4-18"),
		state: "PA",
		city: "Hyner",
		type: "trail" as const,
		distances: ["50 km", "25 km"],
		url: "https://www.patraildogs.com/hyner",
		going: ["Samson C (waitlist)", "Anna W (waitlist)"],
	},
	// remove events that are in the past
].filter((event) => event.date >= today);

// sort events by date
events.sort((a, b) => a.date.getTime() - b.date.getTime());

export { events };
