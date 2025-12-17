"use client";

import { Cat } from "@/src/features/cats";
import { useState } from "react";
import { EditCat } from "./EditCat";

export const FavoriteCatContent = ({ cat }: { cat: Cat }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className=" w-full bg-white border border-gray-100 rounded-lg shadow-sm p-4">
      {isEditing ? (
        <EditCat userId="1" cat={cat} onCancel={() => setIsEditing(false)} />
      ) : (
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {cat.name || "Unnamed Cat"}
            </h3>
          </div>

          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
