import { BookCard } from "../../Components/BookCard/BookCard";
import { useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./ReadBooks.scss";

export const ReadBooks = () => {
  const { bKey } = useParams();
  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [bookKey, setBookKey] = useState<string>("");
  return (
    <div className="readBooksPage">
      {state &&
        state.readBooks.map((books: any, index: number) => (
          <>
            <BookCard
              title={books.title}
              cover={books.cover_i}
              author={books.author_name}
              publishDate={books.first_publish_year}
              avgRating={books.ratings_average}
              style="readBookCard"
            />
            <NavLink to={`review${""}`}>Add a review</NavLink>
            {/* <NavLink to={`/review${books.key}`}>Add a review</NavLink> */}
          </>
          // {/* <Button title="Remove from favorites" clickEvent={() => {}} /> */}
        ))}
      <Outlet />
    </div>
  );
};
