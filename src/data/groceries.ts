export interface Grocery {
  name: string;
  quantity: number;
}

const groceries: Grocery[] = [
  {
    name: 'item1',
    quantity: 1
  },
  {
    name: 'item2',
    quantity: 2,
  },
  {
    name: 'item3',
    quantity: 3
  }
];

export const getGroceries = () => groceries;