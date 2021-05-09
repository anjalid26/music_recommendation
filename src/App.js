import React from "react";
import "./styles.css";
import { useState } from "react";

const musicList = {
  Romance: [
    { song: "Jashne Bahara", rating: "10/10", movie: "Jodha Akbar" },
    { song: "I Love You", rating: "8.5/10", movie: "Bodyguard" },
    { song: "Sab Tera", rating: "9/10", movie: "Baaghi" },
    { song: "Baanjara", rating: "10/10", movie: "Ek Villain" },
    { song: "Tum Se Hi", rating: "9/10", movie: "Jab We Met" }
  ],

  SadSongs: [
    { song: "Mujh Mein Tu", rating: "10/10", movie: "Special 26" },
    { song: "Abhi Mujh Mein Kahin", rating: "10/10", movie: "Agneepath" },
    { song: "Jo Bheji Thi Dua", rating: "9/10", movie: "Shanghai" },
    { song: "Channa Mereya", rating: "8.5/10", movie: "Ae Dil He Mushkil" },
    { song: "Naina", rating: "9.5/10", movie: "Dangal" }
  ],

  Friendship: [
    {
      song: "Tera Yaar Hoon Main",
      rating: "10/10",
      movie: "Sonu Ke Titu Ki Sweety"
    },
    { song: "Tere Jaisa Yaar Kahan", rating: "9/10", movie: "Yaarana" },
    { song: "Veere", rating: "9.5/10", movie: "Veere Di Wedding" },
    { song: "Nanga Punga Dost", rating: "8/10", movie: "Pk" },
    { song: "Yeh Dosti", rating: "8/10", movie: "Sholay" }
  ],

  Motivational: [
    { song: "Yunhi Chala Chal", rating: "9/10", movie: "Swades" },
    { song: "Badal Pe Paon Hain", rating: "9.5/10", movie: "Chak De India" },
    { song: "Zinda", rating: "8/10", movie: "Bhaag Milkha Bhaag" },
    { song: "Lakshya Title Track", rating: "10/10", movie: "Lakshya" },
    { song: "Kar Har Maidan Fateh", rating: "9/10", movie: "Sanju" }
  ],

  ItemSongs: [
    { song: "Ek Do Teen", rating: "7.5/10", movie: "Baghi 2" },
    { song: "Sheila Ki Jawani", rating: "9/10", movie: "Tees Maar Khan" },
    { song: "Gali Gali", rating: "9.5/10", movie: "KGF: Chapter 1" },
    { song: "Dilbar", rating: "6/10", movie: "Satyameva Jayate" },
    { song: "Chikni  Chameli", rating: "7/10", movie: "Agneepath" }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("Romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div>
        <h1 style={{ marginTop: "3rem", color: "#404040" }}>
          {" "}
          Bollywood Songs Recommendations!{" "}
        </h1>
        <p>
          {" "}
          Check out some of my favourite Bollywood songs. Select your fav genre
          to get started.👇🏻{" "}
        </p>

        {Object.keys(musicList).map((genre) => (
          <button
            key="genre"
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1rem",
              margin: "0.5rem 0.1rem",
              backgroundColor: "#e6e6e6",
              borderRadius: "0.5rem"
            }}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicList[selectedGenre].map((music) => (
            <li
              style={{
                padding: "0.5rem 1rem",
                border: "0.5px solid grey",
                margin: "0.5rem",
                borderRadius: "0.5rem",
                listStyle: "none",
                textAlign: "center"
              }}
            >
              {" "}
              <div style={{ fontSize: "large", fontWeight: "bold" }}>
                {" "}
                Song: {music.song}
              </div>{" "}
              <div style={{ fontSize: "small", fontWeight: "light" }}>
                {" "}
                Movie: {music.movie}
              </div>{" "}
              <div style={{ fontSize: "small" }}> Rating: {music.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
