import { CategoryModel, fetchCategories } from "@/data/categories";
import React from "react";
import { useQuery } from "react-query";
import GridButton from "../components/grid-button";

function CategorySection() {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<CategoryModel[]>("categories", fetchCategories);

  if (isLoading) return <div>Fetching posts...</div>;
  console.log(categories);
  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        {categories?.map((value, index) => (
          <GridButton
            category={value}
            key={value.mainShortcutId + value.title}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
