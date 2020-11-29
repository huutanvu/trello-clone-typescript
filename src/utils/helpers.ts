interface Item {
  id: string
}

export const findItemByIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
}