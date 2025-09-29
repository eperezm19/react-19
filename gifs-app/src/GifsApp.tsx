import { useState } from "react";
import { GifList } from "./gifs/gif-list";
import PreviousSearches from "./gifs/previous-searches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/custom-header";
import SearchBar from "./shared/components/search-bar";

export default function GifsApp() {
  const [previousTerm, setpreviousTerm] = useState<string[]>([]);

  const handleTermClick = (term: string) => {
    console.log({
      term,
    });
  };

  const handleSearch = (query: string) => {
    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery === "") return;
    if (previousTerm.includes(cleanQuery)) return;
    setpreviousTerm([cleanQuery, ...previousTerm.slice(0, 8)]);
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
      <GifList gifs={mockGifs} />
    </div>
  );
}
