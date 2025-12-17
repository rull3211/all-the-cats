"use client";

import { useState } from "react";
import CatModal from "./CatModal";
import { Cat } from "../types/Cat";
import { useRouter } from "next/navigation";
import CatList from "../list/components/CatList";

type Props = {
  cats: Cat[];
};

export default function CatGrid({ cats }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Cat | null>(null);
  const router = useRouter();
  function openFor(cat: Cat) {
    setSelected(cat);
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setTimeout(() => setSelected(null), 200);
  }

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <button onClick={() => router.refresh()}>Refresh</button>
        {<CatList cats={cats} onClick={openFor} />}
      </div>

      {selected && <CatModal open={open} onClose={close} cat={selected} />}
    </>
  );
}
