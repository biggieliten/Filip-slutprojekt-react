import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const url = "https://openlibrary.org/search.json?q=1984";

export const useFetch = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData.docs);

        console.log(jsonData.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPI();
  }, [url]);
  return { data };
};
