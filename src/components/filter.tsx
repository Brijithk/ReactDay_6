import React, { useState, useContext } from "react";
import { ProductContext } from "./context";
import { Product } from "./ProductData";

const choices = ["All", "Air Pods", "Head Phone", "Ear Phone"];

type FilterProps = {
  onFilterChange: (values: string[]) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const { productItems, setProductItems } = useContext(ProductContext)!;
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["All"]);

  const toggleOption = (option: string) => {
    if (option === "All") {
      setSelectedOptions(["All"]);
    } else {
      let newSelected;
      if (selectedOptions.includes(option)) {
        newSelected = selectedOptions.filter((opt) => opt !== option);
      } else {
        newSelected = [...selectedOptions.filter((opt) => opt !== "All"), option];
      }
      if (newSelected.length === 0) newSelected = ["All"];
      setSelectedOptions(newSelected);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

 const updatedProducts = productItems.map((item) => ({
  ...item,
  userChoice: (selectedOptions.includes("All") || selectedOptions.includes(item.name)
    ? "yes"
    : "no") as "yes" | "no",
}));

    setProductItems(updatedProducts);
  };

  return (
    <form className="filter-container" onSubmit={handleSubmit}>
      <p>Select your choice(s):</p>
      <div className="options-container">
        {choices.map((choice) => (
          <button
            type="button"
            key={choice}
            className={`option-box ${
              selectedOptions.includes(choice) ? "selected" : ""
            }`}
            onClick={() => toggleOption(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Filter;
