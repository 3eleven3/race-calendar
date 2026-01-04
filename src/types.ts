import type { FC, PropsWithChildren } from "react";
import type { Event } from "./events";

export type AppState = {
	view: "calendar" | "list";
	readonly events: Event[];
};

// biome-ignore lint/complexity/noBannedTypes: React stuff
export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>;
