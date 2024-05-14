import { BookCard } from "../../Components/BookCard/BookCard";
import { useContext, useState } from "react";
import { FavoriteBooksContext } from "../../State/Books/FavoriteBooksContext";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./ReadBooks.scss";
import { Button } from "../../Components/Button/Button";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { StarRating } from "../../Components/Rating/Rating";
import { light } from "@mui/material/styles/createPalette";

export const ReadBooks = () => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const { state, dispatch } = useContext(FavoriteBooksContext);
  const [bookKey, setBookKey] = useState<string>("");
  console.log(state, "read book state");

  const dispatchRating = (bookKey: string, rating: number) => {
    dispatch({
      type: "ADD_RATING",
      payload: {
        rating,
        bookKey,
      },
    });
  };

  const handleCloseReviewForm = () => {
    setIsReviewFormOpen(false);
    console.log("close");
  };

  const handleOpenReviewForm = (key: string) => {
    setBookKey(key);
    setIsReviewFormOpen(true);
    console.log("close");
  };

  return (
    <div className="readBooksPage">
      {state &&
        state.readBooks.map((book: any, index: number) => (
          <>
            <div className="readCardBox">
              <Button
                clickEvent={() =>
                  dispatch({ type: "REMOVE_READ", payload: book.key })
                }
                style=""
                placeholder=""
              />
              <BookCard
                title={book.title}
                cover={book.cover_i}
                author={book.author_name ? book.author_name[0] : "Unknown"}
                publishDate={book.first_publish_year}
                avgRating={book.ratings_average}
                review={book.review}
                // genre={book.subject.map((s: string) => (
                //   <li className="cardSubjectList">{s}</li>
                // ))}
                rating={
                  <StarRating
                    setStarRating={(rating: number) =>
                      dispatchRating(book.key, rating)
                    }
                  />
                }
                style="readBookCard"
              />

              <Button
                style="reviewBtn"
                clickEvent={() => handleOpenReviewForm(book.key)}
                placeholder="Add a review"
              ></Button>
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
  );
};
