import { Book, Author } from "../Types/types";

const ExistsInArray = (array: Book[] | Author[], prop: string): boolean => {
  return array.some((item: Book | Author) => item.key === prop);
};

export default ExistsInArray;
