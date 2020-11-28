import { AppContainer } from "./AppContainer";
import { Card } from "./Card";
import { Column } from "./Column";

export const Board = () => {
  return (
    <AppContainer>
      <Column columnTitle="To Do">
        <Card text="A sample TODO card"></Card>
      </Column>
      <Column columnTitle="In Progress">
        <Card text="A sample In Progress card"></Card>
      </Column>
      <Column columnTitle="Done">
        <Card text="A Done card"></Card>
      </Column>
    </AppContainer>
  );
};
