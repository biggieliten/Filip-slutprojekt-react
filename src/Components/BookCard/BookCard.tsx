import React, { FunctionComponentFactory } from "react";
import "./BookCard.scss";

type BookCardProps = {
  title: string;
  cover: any;
  author: any;
  style: string;
  publishDate: number;
  avgRating?: number;
  review?: string;
  key?: any;
  rating?: any;
  genre?: any;
  pages?: any;
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
      <h3>Author: {author}</h3>
      <p>Published: {publishDate}</p>
      {/* <p>Genre: {genre.slice(0, 2)}</p> */}
      {avgRating ? <p>Avrage Rating: {avgRating}</p> : <p>No avrage rating</p>}
      <>Your Rating: {rating}</>
      {pages && <p>Pages: {pages}</p>}
      {review && <p>Review: {review}</p>}
      {/* <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p> */}
    </div>
  );
};
