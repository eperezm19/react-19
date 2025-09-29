interface PreviousSearchesProps {
  searches: string[];
  onTermClick: (term: string) => void;
}
export default function PreviousSearches({
  searches,
  onTermClick,
}: PreviousSearchesProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-lg font-bold">Busquedas previas</h2>
      <div className="flex items-center gap-2 mt-2">
        {searches.map((search) => (
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            key={search}
            onClick={() => onTermClick(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}
