import React, { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { findItemByIndexById } from "../utils/helpers";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface AppState {
  lists: List[];
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "To Do task" }],
    },
  ],
};

// We create the context:
export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const listIndex = findItemByIndexById(state.lists, action.payload.listId);
      state.lists[listIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

// Create the provider:
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
