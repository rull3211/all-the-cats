import EntityCard from "@/components/EntityCard";
import { Cat } from "@/features/cats/index";
import React from "react";
import { EditCat } from "./EditCat";
import { FavoriteCatContent } from "./FavoriteCatContent";

type Props = {
  cats: Cat[];
};

const MyCats: React.FC<Props> = ({ cats }) => {
  return (
    <ul className="list-none p-0 m-0">
      {cats.map((cat) => (
        <li key={cat.id} className="mb-6 flex justify-center">
          <EntityCard className="w-[50%]" imageUrl={cat.url} id={cat.id}>
            <FavoriteCatContent cat={cat} />
          </EntityCard>
        </li>
      ))}
    </ul>
  );
};

export default MyCats;
