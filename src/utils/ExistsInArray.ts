import { Book } from "../Types/types";

const ExistsInArray = (array: Book[], prop: string): boolean => {
  return array.some((item: Book) => item.key === prop);
};

export default ExistsInArray;
