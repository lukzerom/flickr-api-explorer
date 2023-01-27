import React, { FunctionComponent } from "react";

type AdditionalInfoProps = {
  category: string;
  searchText: string;
  total: number;
};

const AdditionalInfo: FunctionComponent<AdditionalInfoProps> = ({
  category,
  searchText,
  total,
}) => {
  return (
    <>
      <h2>
        {category
          ? `Category: ${category}`
          : searchText
          ? `Query: ${searchText}`
          : ""}
      </h2>
      <h2>{category && `Total: ${total}`}</h2>
    </>
  );
};

export default AdditionalInfo;
