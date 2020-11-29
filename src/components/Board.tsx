import React from "react";
import { useAppState } from "../hooks/useAppState";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./AppContainer";
import { Column } from "./Column";

export const Board = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list) => {
        return <Column columnTitle={list.text} key={list.id} id={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};
