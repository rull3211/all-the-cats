"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalContainerProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function ModalContainer({
  open,
  onClose,
  children,
  className,
}: ModalContainerProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // render into document.body so the modal sits above app layout
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`relative z-10 max-w-3xl w-full mx-4 ${className ?? ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    // `document` is only available on the client; this component is a client component
    document.body
  );
}
