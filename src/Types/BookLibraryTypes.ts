export type Book = {
  title: string;
  author_name: string;
  cover_i?: number;
  key: string;
};

export type FavoriteBooksType = {
  id: number;
  rating?: number;
  review: string;
  pages: number;
};

export type BooksArrayType = {
  favoriteBooks: FavoriteBooksType[];
  readBooks: any[];
};

// export type reducerStateType = {
// 	favoriteBooks: fa
// }
