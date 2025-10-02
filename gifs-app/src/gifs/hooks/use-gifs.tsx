import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerm, setpreviousTerm] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery === "") return;
    if (previousTerm.includes(cleanQuery)) return;

    setpreviousTerm([cleanQuery, ...previousTerm.slice(0, 8)]);

    const gifs = await getGifsByQuery(cleanQuery);
    setGifs(gifs);

    gifsCache.current[cleanQuery] = gifs;
  };
  return {
    gifs,
    previousTerm,
    handleTermClick,
    handleSearch,
  };
};
