import React from "react";
import { Board } from "./components/Board";
import { AppStateProvider } from "./contexts/AppStateContext";
import { GlobalStyle } from "./utils";

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <Board />
        <GlobalStyle />
      </div>
    </AppStateProvider>
  );
}

export default App;
