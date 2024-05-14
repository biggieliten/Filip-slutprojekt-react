import { ReadBooks } from "../Routes/ReadBooks/ReadBooks";
import { Book, ReadBooksType } from "../Types/BookLibraryTypes";
// import { BooksArray } from "./Books/FavoriteBooksContext";
import { BooksArrayType } from "../Types/BookLibraryTypes";

export type Action =
  | { type: "FAVORITE_BOOK"; payload: any }
  | { type: "READ_BOOK"; payload: string }
  | { type: "ADD_REVIEW"; payload: any }
  | { type: "ADD_RATING"; payload: any }
  | { type: "REMOVE_READ"; payload: string }
  | { type: "REMOVE_FAVORITE"; payload: string }
  | { type: "FAVORITE_AUTHOR"; payload: string }
  | { type: "REMOVE_AUTHOR"; payload: string };

const BookAndAuthorReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "FAVORITE_BOOK":
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    case "READ_BOOK":
      return {
        ...state,
        readBooks: [...state.readBooks, action.payload],
      };
    case "ADD_REVIEW":
      return {
        ...state,
        readBooks: state.readBooks.map((book: any) =>
          book.key === action.payload.key
            ? { ...book, review: action.payload.review }
            : book
        ),
      };
    case "ADD_RATING":
      return {
        ...state,
        readBooks: state.readBooks.map((book: any) =>
          book.key === action.payload.key
            ? { ...book, rating: action.payload.rating }
            : book
        ),
      };
    case "REMOVE_READ":
      return {
        ...state,
        readBooks: state.readBooks.filter(
          (book: Book) => book.key !== action.payload
        ),
      };
    // case "REMOVE_FAVORITE":
    //   return {
    //     ...state,
    //     readBooks: state.readBooks.filter(
    //       (book: Book) => book.key !== action.payload
    //     ),
    //   };
    // case "FAVORITE_AUTHOR":
    //   return {
    //     ...state,
    //     songs: state.songs.filter(
    //       (song: SongType) => song.title !== action.payload
    //     ),
    //   };
    // case "REMOVE_AUTHOR":
    //   return {
    //     ...state,
    //     songs: state.songs.filter(
    //       (song: SongType) => song.title !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};

export default BookAndAuthorReducer;
