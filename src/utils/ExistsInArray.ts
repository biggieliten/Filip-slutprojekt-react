import { Book } from "../Types/BookLibraryTypes";

const ExistsInArray = (array: any, prop: string): boolean => {
  console.log(array, "exist array");
  return array.some((item: Book) => item.key === prop);
};

export default ExistsInArray;
