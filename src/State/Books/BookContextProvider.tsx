import { createContext, useReducer } from "react";
import { BookReducer } from "../reducer";
import { FavoriteBooksContext, initialBooks } from "./FavoriteBooksContext";

type ProviderProps = {
  children: React.ReactNode;
};
export const BookProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(BookReducer, initialBooks);

  return (
    <FavoriteBooksContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};
