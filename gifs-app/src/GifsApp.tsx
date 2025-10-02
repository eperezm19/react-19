import { GifList } from "./gifs/components/gif-list";
import PreviousSearches from "./gifs/components/previous-searches";
import { useGifs } from "./gifs/hooks/use-gifs";
import CustomHeader from "./shared/components/custom-header";
import SearchBar from "./shared/components/search-bar";

export default function GifsApp() {
  const { gifs, previousTerm, handleTermClick, handleSearch } = useGifs();

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
