import React from "react";
import { useAppState } from "../hooks/useAppState";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./AppContainer";
import { Column } from "./Column";

export const Board = () => {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => {
        return <Column columnTitle={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
