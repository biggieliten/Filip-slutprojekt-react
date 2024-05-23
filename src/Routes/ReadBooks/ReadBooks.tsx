import { BookCard } from "../../Components/BookCard/BookCard";
import { ReactNode, useContext, useEffect, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import "./ReadBooks.scss";
import { Button } from "../../Components/Button/Button";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { StarRating } from "../../Components/Rating/Rating";
import RoundNumber from "../../utils/RoundNumber";
import { Book } from "../../Types/types";
import avrage from "../../utils/avrage";

export const ReadBooks = (): ReactNode => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [amountRead, setAmountRead] = useState<number>();
  const [amountPages, setAmountPages] = useState<number>();
  const [avgRead, setAvgRead] = useState<number>();
  const [avgRating, setAvgRating] = useState<number>();
  const [bookKey, setBookKey] = useState<string>("");

  const handleOpenReviewForm = (key: string) => {
    setBookKey(key);
    setIsReviewFormOpen(true);
  };

  useEffect(() => {
    const totalAmountPages = state.readBooks.reduce(
      (sum: number, book: Book) => sum + (book.pages || 0),
      0
    );
    setAmountPages(totalAmountPages);
    setAmountRead(state.readBooks.length);
    setAvgRead(avrage(totalAmountPages, state.readBooks.length));

    const totalRating = state.readBooks.reduce(
      (sum: number, book: Book) => sum + (book.ratings_average || 0),
      0
    );

    setAvgRating(RoundNumber(avrage(totalRating, state.readBooks.length)));
  }, [amountPages]);

  return (
    <>
      <div className="statistics">
        <h1>Read Books: {amountRead}</h1>
        <h1>Avrage read pages: {avgRead ? avgRead : 0}</h1>
        <h1>Avrage book rating: {avgRating ? avgRating : 0}</h1>
        <h1>Total read pages: {amountPages ? amountPages : 0}</h1>
      </div>
      <div className="readBooksPage">
        <div className="amountOfBooks"></div>
        {state &&
          state.readBooks.map((book: Book) => (
            <>
              <div className="readCardBox">
                <Button
                  clickEvent={() =>
                    dispatch({
                      type: "REMOVE_READ",
                      payload: { key: book.key },
                    })
                  }
                  style="removeRead"
                  placeholder="&times;"
                />
                <BookCard
                  title={book.title}
                  cover={book.cover_i}
                  author={book.author_name ? book.author_name : "Unknown"}
                  publishDate={book.first_publish_year}
                  avgRating={
                    book.ratings_average && RoundNumber(book.ratings_average)
                  }
                  review={book.review}
                  pages={book.pages}
                  rating={
                    <StarRating
                      setStarRating={(rating: number) =>
                        dispatch({
                          type: "ADD_RATING",
                          payload: { rating: rating, bookKey: book.key },
                        })
                      }
                      bookRating={book.rating || 0}
                    />
                  }
                  style="readBookCard"
                />

                <Button
                  style="reviewBtn"
                  clickEvent={() => handleOpenReviewForm(book.key)}
                  placeholder="Add a review"
                />
                {isReviewFormOpen && bookKey === book.key && (
                  <ReviewForm
                    bookKey={bookKey}
                    handleClose={() => setIsReviewFormOpen(false)}
                  />
                )}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
