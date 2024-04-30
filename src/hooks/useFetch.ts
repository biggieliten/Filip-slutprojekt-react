import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export const useFetch = (endpoint: string) => {
  const url = `https://openlibrary.org/search.json?q=${endpoint}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `An unexpected error has occured: ${response.statusText}`
          );
        }
        const jsonData = await response.json();

        setData(jsonData.docs);
        console.log(jsonData.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPI();
  }, [endpoint]);
  return { data };
};
