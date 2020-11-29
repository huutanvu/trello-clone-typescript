import React from "react";
import { useAppState } from "../hooks/useAppState";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer } from "./ColumnContainer";
import { ColumnTitle } from "./ColumnTitle";

interface ColumnProps {
  columnTitle: string;
  index: number;
}

export const Column = ({
  columnTitle,
  index,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{columnTitle}</ColumnTitle>
      {state.lists[index].tasks.map((task) => {
        return <Card text={task.text} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
