import { CategoryModel } from "@/data/categories";
import React from "react";
import Image from "next/image";

function GridButton({ category }: { category: CategoryModel }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={category.imageUrl}
        sizes="100vw"
        width={0}
        height={0}
        alt={category.title}
        className="w-auto h-[62px] mb-2"
      />

      <div className="text-md font-thin">{category.title}</div>
    </div>
  );
}

export default GridButton;
