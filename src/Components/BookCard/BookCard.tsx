import React from "react";
import "./BookCard.scss";

export type BookCardProps = {
  title: string;
  cover: string | number;
  author: string;
  style: string;
  publishDate?: number;
  avgRating?: number;
  review?: string;
  key?: string;
  rating?: React.ReactNode;
  genre?: string;
  pages?: number;
};

export const BookCard = ({
  title,
  cover,
  author,
  style,
  publishDate,
  avgRating,
  key,
  review,
  rating,
  pages,
  genre,
}: BookCardProps) => {
  return (
    <div key={key} className={style}>
      <h1>{title}</h1>
      {cover ? (
        <img src={`https://covers.openlibrary.org/b/id/${cover}.jpg`} alt="" />
      ) : (
        "No image"
      )}
      <h3> {author}</h3>
      {publishDate && <p>Published: {publishDate}</p>}
      {/* <p>Genre: {genre.slice(0, 2)}</p> */}
      {avgRating ? (
        <p>Avrage Rating: {avgRating}</p>
      ) : (
        avgRating && <p>No avrage rating</p>
      )}
      {rating && <p>Your Rating: {rating}</p>}
      {pages && <p>Pages: {pages}</p>}
      {review && <p>Review: {review}</p>}
      {/* <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p> */}
    </div>
  );
};
