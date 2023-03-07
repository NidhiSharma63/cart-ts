
export interface IData {
    category: string;
    description: string;
    id: number;
    image: string;
    price: string;
    rating: {
      count: number;
      rate: number;
    };
    title: string;
}


export interface IItemProps {
  item: IData
}