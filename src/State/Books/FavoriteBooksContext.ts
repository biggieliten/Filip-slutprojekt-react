import { createContext } from "react";
import { FavoriteBooksType, ReducerType } from "../../Types/BookLibraryTypes";
import { Action } from "../reducer";

// export const favoriteBooks: FavoriteBooksType[] = [];
// export const readBooks: any[] = [];

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
