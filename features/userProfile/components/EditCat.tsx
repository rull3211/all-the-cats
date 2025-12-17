"use client";
import { useState } from "react";
import { removeFavoriteCatAction } from "../actions/removeFavoriteAction";
import { Cat } from "@/features/cats/types/Cat";
import { renameFavoriteCatAction } from "../actions/renameFavoriteAction";
import { useRouter } from "next/navigation";
import CommandTool from "./CommandTool";
import { LabeledInput } from "@/components/LabeledInput";
import { on } from "events";

const formFields = {
  catName: "cat-name",
};

export const EditCat = ({
  userId,
  cat,
  onCancel,
}: {
  userId: string;
  cat: Cat;
  onCancel: () => void;
}) => {
  const nav = useRouter();
  const handleSubmit = (e: FormData) => {
    if (e.get(formFields.catName) === cat.name) {
      onCancel();
      return;
    }
    renameFavoriteCatAction(userId, {
      ...cat,
      name: e.get(formFields.catName) as string,
    }).then(() => {
      nav.refresh();
      onCancel && onCancel();
    });
  };

  return (
    <form
      action={async (e) => {
        handleSubmit(e);
      }}
      className="w-full bg-white"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Edit favorite</h3>
          <p className="mt-1 text-sm text-gray-500">
            Update the name for this favorite cat.
          </p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              removeFavoriteCatAction(userId, cat.id).then(() => {
                nav.refresh();
              });
            }}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-50 hover:bg-red-100"
          >
            Remove
          </button>
        </div>
      </div>

      <LabeledInput
        label="Cat Name"
        name={formFields.catName}
        id={`cat-name-${cat.id}`}
        defaultValue={cat.name || ""}
      />
      <CommandTool onCancel={onCancel} />
    </form>
  );
};
