import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onQuery: (value: string) => void;
}
export default function SearchBar({
  placeholder = "Buscar gifs",
  onQuery,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onQuery(query);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onQuery(query);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, onQuery]);

  return (
    <div className="flex items-center gap-2 mt-10">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2"
      />
      <button
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}
