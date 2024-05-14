import { BookCard } from "../../Components/BookCard/BookCard";
import { useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./ReadBooks.scss";
import { Button } from "../../Components/Button/Button";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export const ReadBooks = () => {
  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [bookKey, setBookKey] = useState<string>("");
  console.log(state, "read book state");
  return (
    <div className="readBooksPage">
      {state &&
        state.readBooks.map((book: any, index: number) => (
          <>
            <div>
              <BookCard
                title={book.title}
                cover={book.cover_i}
                author={book.author_name}
                publishDate={book.first_publish_year}
                avgRating={book.ratings_average}
                style="readBookCard"
                review={book.review}
              />

              <Button
                clickEvent={() => {
                  setBookKey(book.key);
                }}
                placeholder="Add a review"
              ></Button>
              {bookKey === book.key && <ReviewForm bookKey={bookKey} />}
            </div>
          </>
        ))}
    </div>
  );
};
