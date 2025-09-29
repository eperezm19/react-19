import { useState } from "react";
import { GifList } from "./gifs/components/gif-list";
import PreviousSearches from "./gifs/components/previous-searches";
import CustomHeader from "./shared/components/custom-header";
import SearchBar from "./shared/components/search-bar";
import type { Gif } from "./gifs/interfaces/gif.interface";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export default function GifsApp() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerm, setpreviousTerm] = useState<string[]>([]);

  const handleTermClick = (term: string) => {
    console.log({
      term,
    });
  };

  const handleSearch = async (query: string) => {
    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery === "") return;
    if (previousTerm.includes(cleanQuery)) return;
    setpreviousTerm([cleanQuery, ...previousTerm.slice(0, 8)]);
    const gifs = await getGifsByQuery(cleanQuery);
    setGifs(gifs);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Encuentra los mejores gifs de tu personaje favorito"
      />
      {/* Search input */}
      <SearchBar placeholder="Search gifs" onQuery={handleSearch} />
      {/* Busquedas previas */}
      <PreviousSearches searches={previousTerm} onTermClick={handleTermClick} />
      {/* Gifs list */}
      <GifList gifs={gifs} />
    </div>
  );
}
