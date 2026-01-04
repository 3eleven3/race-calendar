import { createContext, useContext } from "react";
import type { AppState, FCWithChildren } from "./types";
import { type Updater, useImmer } from "use-immer";
import { events } from "./events";

const defaultState: AppState = { view: "calendar", events };

const AppContext = createContext<{
	state: AppState;
	setState: Updater<AppState>;
}>({
	state: defaultState,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setState: () => {},
});

export const AppProvider: FCWithChildren = (props) => {
	const [state, setState] = useImmer<AppState>(defaultState);

	return (
		<AppContext.Provider value={{ state, setState }}>
			{props.children}
		</AppContext.Provider>
	);
};

export const useAppState = () => useContext(AppContext);
