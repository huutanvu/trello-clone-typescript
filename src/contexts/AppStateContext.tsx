import React, { createContext, useContext } from 'react';

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

interface AppStateContextProps {
  state: AppState
}

// We create the context:
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

// Create the provider:
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{state: appData}}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const appState = useContext(AppStateContext);

  return appState;
}