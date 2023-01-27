import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Category } from "../types";
import { categories } from "../utils/categories";

type CategoriesProps = {
  handleSelectCategory: (value: string) => void;
};

const Categories: FunctionComponent<CategoriesProps> = ({
  handleSelectCategory,
}) => {
  return (
    <>
      {categories.map((category) => (
        <Button
          key={category.value}
          onClick={() => handleSelectCategory(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </>
  );
};

export default Categories;
