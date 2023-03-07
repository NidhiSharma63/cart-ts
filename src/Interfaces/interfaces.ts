

export interface IItemProps {
  item: {
    category: string;
    description: string;
    id: Number;
    image: string;
    price: string;
    rating: {
      count: Number;
      rate: Number;
    };
    title: string;
  };
}