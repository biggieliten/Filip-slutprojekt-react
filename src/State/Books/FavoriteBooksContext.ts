import { createContext } from "react";
import {
  FavoriteBooksType,
  BooksArrayType,
} from "../../Types/BookLibraryTypes";
import { Action } from "../reducer";

// export const favoriteBooks: FavoriteBooksType[] = [];
// export const readBooks: any[] = [];

export const initialBooks: BooksArrayType = {
  favoriteBooks: [],
  readBooks: [],
};

export const FavoriteBooksContext = createContext<{
  state: BooksArrayType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialBooks,
  dispatch: () => null,
});
