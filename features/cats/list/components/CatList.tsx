import EntityCard from "@/components/EntityCard";
import { Cat } from "../../types/Cat";

const CatList = ({
  cats,
  onClick,
}: {
  cats: Cat[];
  onClick: (cat: Cat) => void;
}) => {
  function handleKey(e: React.KeyboardEvent<HTMLLIElement>, cat: Cat) {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(cat);
    }
  }
  return (
    <ul className="min-h-45 flex flex-col gap-4 p-0 m-0 items-center">
      {cats.map((cat) => (
        <li
          key={cat.id}
          onKeyDown={(e) => handleKey(e, cat)}
          onClick={() => onClick(cat)}
          className="list-none p-0 m-0 w-2/4"
        >
          <EntityCard
            id={cat.id}
            imageUrl={cat.url}
            className="cursor-pointer h-full"
          />
        </li>
      ))}
    </ul>
  );
};

export default CatList;
