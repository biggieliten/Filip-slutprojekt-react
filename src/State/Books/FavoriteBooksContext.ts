import { createContext } from "react";
import { Book, ReducerType } from "../../Types/types";
import { Action } from "../reducer";

export type State = {
  favoriteBooks: Book[];
  readBooks: Book[];
};
export const initialBooks: ReducerType = {
  favoriteBooks: [],
  readBooks: [],
};

export const FavoriteBooksContext = createContext<{
  state: ReducerType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialBooks,
  dispatch: () => null,
});
