export type Book = {
  title: string;
  author_name: string;
  cover_i: string;
  key: string;
  first_publish_year: number;
  ratings_average: number;
  rating?: number;
  review: string;
  pages: number;
  subject?: any;
  //   subject?: string[];
};
export type Works = {
  authors: { name: string }[];
  cover_id: number;
  title: string;
  subject: string;
  key?: string;
  first_publish_year: number;
};

export type ReducerType = {
  favoriteBooks: Book[];
  readBooks: Book[];
  //   children: { children: React.ReactNode };
};

export type APIresp = {
  docs: Book[];
  works: Works[];
};
