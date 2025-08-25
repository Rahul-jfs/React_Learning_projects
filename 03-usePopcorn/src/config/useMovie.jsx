import { useState } from "react";
import { useEffect } from "react";
import { KEY } from "./constants";

export const useMovie = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(""); // set the error back to "" after every change in query state or else it will only display the Error message
          const result = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!result.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await result.json();

          if (data.Response === "False") {
            throw new Error("Movie not found");
          }

          setMovies(data.Search);
          setError("");
          // console.log(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        //this block displays no movie  when the search string is less than 3 or when there is no string in search bar and sets movie to empty array
        setMovies([]);
        setError("");
        return; // fetchMovies() is not called because of return
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
};
