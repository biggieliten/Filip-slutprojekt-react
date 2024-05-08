import { createContext, useReducer } from "react";
import BookAndAuthorReducer from "../reducer";
import { BooksArray, FavoriteBooksContext } from "./FavoriteBooksContext";

// type GlobalMusicProviderProps = {
//   children: React.ReactNode;
// };

export const BookProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BooksArray, BooksArray);

  return (
    <FavoriteBooksContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};
