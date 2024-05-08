import { createContext } from "react";
import { FavoriteBooksType } from "../../Types/BookLibraryTypes";
import { Action } from "../reducer";

export const favoriteBooks: FavoriteBooksType[] = [];
export const readBooks: any[] = [];

export const BooksArray: any = {
  favoriteBooks: favoriteBooks,
  readBooks: readBooks,
};

export const FavoriteBooksContext = createContext<{
  state: any;
  dispatch: React.Dispatch<Action>;
}>({
  state: BooksArray,
  dispatch: () => null,
});
