import type { Gif } from "../mock-data/gifs.mock";

interface GifListProps {
  gifs: Gif[];
}

export const GifList = ({ gifs }: GifListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {gifs.map((gif) => (
        <div className="border border-gray-300 rounded-md p-4" key={gif.id}>
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height}
          </p>
        </div>
      ))}
    </div>
  );
};
