import type { CSSProperties } from "react";

const firstName = "John";
const lastName = "Doe";
const favoriteGames = [
  "The Witcher 3",
  "The Last of Us",
  "The Elder Scrolls V: Skyrim",
];
const isActive = true;

const address = {
  zipcode: "12345",
  country: "USA",
};

const myStyle: CSSProperties = {
  backgroundColor: "red",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>
      <h3>{isActive ? "Active" : "Inactive"}</h3>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
};
