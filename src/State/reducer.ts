import { ReducerType, Book, Author } from "../Types/types";

export type Action =
  | { type: "FAVORITE_BOOK"; payload: Book }
  | { type: "READ_BOOK"; payload: { book: Book } }
  | { type: "ADD_REVIEW"; payload: any }
  | { type: "ADD_RATING"; payload: { bookKey: string; rating: number } }
  | { type: "REMOVE_READ"; payload: { key: string } }
  | { type: "REMOVE_FAVORITE"; payload: { key: string } }
  | { type: "FAVORITE_AUTHOR"; payload: Author }
  | { type: "REMOVE_AUTHOR"; payload: { key: string } };

export const BookReducer = (state: ReducerType, action: Action) => {
  switch (action.type) {
    case "FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };

    case "READ_BOOK":
      return {
        ...state,
        readBooks: [...state.readBooks, action.payload.book],
      };

    case "ADD_REVIEW":
      return {
        ...state,
        readBooks: state.readBooks.map((book) =>
          book.key === action.payload.key
            ? {
                ...book,
                review: action.payload.review,
                pages: action.payload.pages,
              }
            : book
        ),
      };

    case "ADD_RATING":
      console.log(action.payload.rating, "rating");
      return {
        ...state,
        readBooks: state.readBooks.map((book) =>
          book.key === action.payload.bookKey
            ? { ...book, rating: action.payload.rating }
            : book
        ),
      };

    case "REMOVE_READ":
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book) => book.key !== action.payload.key
        ),
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (book) => book.key !== action.payload.key
        ),
      };
    case "FAVORITE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: [...state.favoriteAuthors, action.payload],
      };
    case "REMOVE_AUTHOR":
      return {
        ...state,
        favoriteAuthors: state.favoriteAuthors.filter(
          (author) => author.key !== action.payload.key
        ),
      };

    default:
      return state;
  }
};
