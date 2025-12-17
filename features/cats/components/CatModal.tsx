import EntityCard from "@/components/EntityCard";
import ModalContainer from "../../../components/ModalContainer";
import { favoriteCatAction } from "../actions/favoriteCat.action";
import { Cat } from "../types/Cat";
import { useState } from "react";
import { LabeledInput } from "@/components/LabeledInput";

type CatModalProps = {
  open: boolean;
  onClose: () => void;
  cat: Cat;
};

export default function CatModal({ open, onClose, cat }: CatModalProps) {
  const [isNaming, setIsNaming] = useState(false);
  return (
    <ModalContainer open={open} onClose={onClose}>
      <form
        action={async (e) => {
          console.log("Form submitted", e.get("name"));
          await favoriteCatAction("1", {
            id: cat.id,
            url: cat.url,
            name: e.get("name") as string,
          });
          setIsNaming(false);
          onClose();
        }}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <EntityCard id={cat.id} imageUrl={cat.url} />
          {isNaming && (
            <div className="px-4">
              <LabeledInput
                label="Cat Name"
                name="name"
                id={`cat-name-${cat.id}`}
                defaultValue={cat.name || ""}
              />
            </div>
          )}

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type={"submit"}
                className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {"Lagre"}
              </button>

              <button
                type={"button"}
                onClick={() => {
                  setIsNaming(!isNaming);
                }}
                className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700"
              >
                {!isNaming ? "Navngi og Lagre" : "Avbryt"}
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="ml-4 inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </ModalContainer>
  );
}
