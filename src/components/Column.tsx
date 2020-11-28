import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer } from "./ColumnContainer";
import { ColumnTitle } from "./ColumnTitle";

interface ColumnProps {
  columnTitle: string;
}

export const Column = ({
  columnTitle,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{columnTitle}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
