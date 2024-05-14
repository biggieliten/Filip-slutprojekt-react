import { useParams } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { useContext, useState } from "react";
import {
  FavoriteBooksContext,
  initialBooks,
} from "../../State/Books/FavoriteBooksContext";
import { ReadBooks } from "../ReadBooks/ReadBooks";

// FavoriteBooksContext
export const ReviewForm = (bookKey: any, handleClose: any) => {
  const { key } = useParams();
  const [review, setReview] = useState("");
  const [bookKeys, setBookKeys] = useState({});
  const { dispatch, state } = useContext(FavoriteBooksContext);
  //   const [bookKey, setBookKey] = useState<string>("");

  const handleClick = (key: string) => {
    // setBookKey(key);
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        review,
        key,
      },
    });
    bookKey.handleClose();
  };

  return (
    <>
      <form action="">
        <textarea
          placeholder={key}
          value={review}
          onChange={(e) => {
            setReview(e.target?.value);
          }}
          name=""
          id=""
        ></textarea>
      </form>
      <Button
        style=""
        clickEvent={() => handleClick(bookKey.bookKey)}
        placeholder="Submit"
      ></Button>
    </>
  );
};
