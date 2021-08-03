import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
export default function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className="px-5 my-4 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}
