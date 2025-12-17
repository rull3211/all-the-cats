import React, { KeyboardEvent } from "react";
import Image from "next/image";

interface EntityCardProps {
  id: string | number;
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
}

const EntityCard: React.FC<EntityCardProps> = ({
  id,
  className = "",
  imageUrl,
  children,
}) => {
  return (
    <figure
      key={id}
      className={`m-0 rounded-lg overflow-hidden bg-gray-50 shadow-sm ${className}`}
    >
      <div className="w-full relative flex-1 min-h-0">
        <Image
          src={imageUrl}
          alt={`Cat ${id}`}
          width={800}
          height={600}
          className="object-contain w-full h-full"
          sizes="100vw"
          unoptimized={/\.gif($|\?)/i.test(String(imageUrl))}
        />
      </div>
      {children}
    </figure>
  );
};

export default EntityCard;
