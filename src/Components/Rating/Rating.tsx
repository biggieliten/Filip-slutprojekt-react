import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

type StarRatingProps = {
  setStarRating: (value: number) => void;
};

export const StarRating: React.FC<StarRatingProps> = ({ setStarRating }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    setStarRating(rating);
    console.log(rating, rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} />
    </div>
  );
};

// import * as React from "react";
// import Rating from "@mui/material/Rating";
// import Box from "@mui/material/Box";

// function getLabelText(value: number) {
//   return `${value} Star${value !== 1 ? "s" : ""}, ${[value]}`;
// }

// export default function HoverRating() {
//   const [value, setValue] = React.useState<number | null>(() => {
//     const savedValue = localStorage.getItem("rating");
//     return savedValue !== null ? Number(savedValue) : 0;
//   });
//   const [hover, setHover] = React.useState(-1);

//   const handleValueChange = (event: any, newValue: number | null) => {
//     setValue(newValue);

//     if (newValue !== null) {
//       localStorage.setItem("rating", String(newValue));
//     }
//   };
//   return (
//     <Box
//       sx={{
//         width: 200,
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={handleValueChange}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//   );
// }
