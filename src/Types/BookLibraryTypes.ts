export type Book = {
  title: string;
  author_name: any;
  cover_i?: number;
  key: string;
  first_publish_year: number;
  ratings_average: number;
};
export type Works = {
  title: string;
  subject: string;
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
