import React from "react";
import { Rating } from "react-simple-star-rating";

export type StarRatingProps = {
  setStarRating: (value: number) => void;
  bookRating: number;
};

export const StarRating: React.FC<StarRatingProps> = ({
  setStarRating,
  bookRating,
}) => {
  const handleRating = (rate: number) => {
    setStarRating(rate);
    console.log(rate);
  };

  return (
    <div className="starContainer">
      <Rating
        className="stars"
        onClick={handleRating}
        initialValue={bookRating}
      />
    </div>
  );
};
