import React from "react";
import { useAppState } from "../hooks/useAppState";
import { findItemByIndexById } from "../utils/helpers";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer } from "./ColumnContainer";
import { ColumnTitle } from "./ColumnTitle";

interface ColumnProps {
  columnTitle: string;
  id: string;
}

export const Column = ({
  columnTitle,
  id,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();
  const index = findItemByIndexById(state.lists, id);
  return (
    <ColumnContainer>
      <ColumnTitle>{columnTitle}</ColumnTitle>
      {state.lists[index].tasks.map((task) => {
        return <Card text={task.text} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { listId: id, text: text } })
        }
        dark
      />
    </ColumnContainer>
  );
};
