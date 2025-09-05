const firstName = "John";
const lastName = "Doe";
const favoriteGames = [
  "The Witcher 3",
  "The Last of Us",
  "The Elder Scrolls V: Skyrim",
];

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>
    </>
  );
};
