import { Book } from "../Types/BookLibraryTypes";
// import { BooksArray } from "./Books/FavoriteBooksContext";
import { BooksArrayType } from "../Types/BookLibraryTypes";

export type Action =
  | { type: "FAVORITE_BOOK"; payload: any }
  | { type: "READ_BOOK"; payload: string }
  | { type: "REMOVE_BOOK"; payload: string }
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
    case "REMOVE_BOOK":
      return {
        // ...state,
        // BooksArray: state.songs.filter(
        //   (song: SongType) => song.title !== action.payload
        // ),
      };
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
