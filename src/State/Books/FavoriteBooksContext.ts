import { createContext } from "react";
import { Book, ReducerType } from "../../Types/types";
import { Action } from "../reducer";

export const initialBooks: ReducerType = {
  favoriteBooks: [],
  readBooks: [],
  favoriteAuthors: [],
};

export const FavoriteBooksContext = createContext<{
  state: ReducerType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialBooks,
  dispatch: () => null,
});
