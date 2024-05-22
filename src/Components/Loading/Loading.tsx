import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CircularProgress color="warning" />
    </Box>
  );
}

// import React, { useState, useEffect } from "react";

// // import Loading from "./Loading";

// function Loading() {
//   return (
//     <div className="loader-container">
//       <div className="loader">Loading...</div>
//     </div>
//   );
// }

// const Loadingg = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <div>
//       <h1>Data Loaded!</h1>
//     </div>
//   );
// };

// export default { Loadingg };
