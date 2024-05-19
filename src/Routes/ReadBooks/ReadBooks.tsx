import { BookCard } from "../../Components/BookCard/BookCard";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import "./ReadBooks.scss";
import { Button } from "../../Components/Button/Button";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { StarRating, StarRatingProps } from "../../Components/Rating/Rating";
import RoundNumber from "../../utils/RoundNumber";
import { Book } from "../../Types/types";

export const ReadBooks = (): ReactNode => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [amountRead, setAmountRead] = useState<number>();
  const [amountPages, setAmountPages] = useState<number>();
  const [bookKey, setBookKey] = useState<string>("");
  console.log(state, "read book state");

  const handleCloseReviewForm = () => {
    setIsReviewFormOpen(false);
    console.log("close");
  };

  const handleOpenReviewForm = (key: string) => {
    setBookKey(key);
    setIsReviewFormOpen(true);
    console.log("close");
  };

  useEffect(() => {
    const totalAmountPages = state.readBooks.reduce(
      (sum: number, book: Book) => sum + book.pages,
      0
    );
    setAmountPages(totalAmountPages);
    setAmountRead(state.readBooks.length);
  }, [amountRead, amountPages]);

  return (
    <>
      <h1>Read Books: {amountRead}</h1>
      <h1>Total read pages: {amountPages}</h1>
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
                  style=""
                  placeholder="x"
                />
                <BookCard
                  title={book.title}
                  cover={book.cover_i}
                  author={book.author_name ? book.author_name[0] : "Unknown"}
                  publishDate={book.first_publish_year}
                  avgRating={
                    book.ratings_average && RoundNumber(book.ratings_average)
                  }
                  review={book.review}
                  pages={book.pages}
                  // genre={book.subject.map((s: string) => (
                  //   <li className="cardSubjectList">{s}</li>
                  // ))}
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
                    handleClose={handleCloseReviewForm}
                  />
                )}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
