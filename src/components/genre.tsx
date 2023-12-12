import React from "react";
import genresList from "../data/constants";
import "./genre.css";

const Genre = () => {
  //   const genres = [
  //     { name: "Action", imageUrl: "https://example.com/action-image-url.jpg" },
  //     {
  //       name: "Adventure",
  //       imageUrl: "https://example.com/adventure-image-url.jpg",
  //     },
  //     { name: "RPG", imageUrl: "https://example.com/rpg-image-url.jpg" },
  //     // Add more genres and image URLs as needed
  //   ];
  const imageUrl: string =
    "https://play-lh.googleusercontent.com/0bYn37LbvEhth8P2aBTz2nOJ6DwurxP_NU_ONKJpmcBxKppponPqDUxVKSGmEUdgwSo=s256-rw";
  return (
    <ul className="list-group list-group-flush list-unstyled">
      {genresList.map((genre) => (
        <li className="list-group-item border-0" key={genre}>
          {/* <img
            src={imageUrl}
            alt="Image 1"
            width="40"
            height="40"
            className="custom-img-class"
          />
          {genre} */}
          <div className="row">
            <div className="col-auto">
              <img
                src={imageUrl}
                alt="Image 1"
                width="40"
                height="40"
                className="custom-img-class"
              />
            </div>
            <div className="col">
              <p className="mt-2">{genre}</p>
            </div>
          </div>
        </li>
      ))}

      {/* <li className="list-group-item border-0">Item 2</li>
      <li className="list-group-item border-0">Item 3</li>
      <li className="list-group-item border-0">Item 4</li> */}
    </ul>
  );
};

export default Genre;
