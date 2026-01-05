import type { FC, PropsWithChildren } from "react";
import type { Event } from "./events";

export type AppState = {
	isMobile: boolean;
	readonly events: Event[];
};

// biome-ignore lint/complexity/noBannedTypes: React stuff
export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>;
