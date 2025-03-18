import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>This movie has a rating of {movieRating} </p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating maxRating={10} defaultRating={3} />

    <Test />
    {/* <App /> */}
  </StrictMode>
);

//  <StarRating
//    maxRating={5}
//    messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//  />;

//  <StarRating
//    maxRating={5}
//    messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//  />;
