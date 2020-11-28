import React from "react";
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
    </ColumnContainer>
  );
};
