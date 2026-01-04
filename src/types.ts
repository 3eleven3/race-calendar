import type { FC, PropsWithChildren } from "react";

export type AppState = {
	view: "calendar" | "list";
};

// biome-ignore lint/complexity/noBannedTypes: React stuff
export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>;
