import { createContext, useReducer } from "react";
import BookAndAuthorReducer from "../reducer";
import { FavoriteBooksContext, initialBooks } from "./FavoriteBooksContext";
import { FavoriteBooksType } from "../../Types/BookLibraryTypes";

// type GlobalMusicProviderProps = {
//   children: React.ReactNode;
// };
type ProviderProps = {
  children: React.ReactNode;
};
export const BookProvider = ({ children }: ProviderProps) => {
  //   const favoriteBooks: FavoriteBooksType[] = [];
  //   const readBooks: any[] = [];
  //   const initialBooks = {favoriteBooks}
  const [state, dispatch] = useReducer(BookAndAuthorReducer, initialBooks);

  return (
    <FavoriteBooksContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};
