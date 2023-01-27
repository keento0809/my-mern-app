import { categories } from "../../data/data";
import { Select, useMediaQuery } from "@chakra-ui/react";

const ItemCategorySelect = ({ onChange, maxWidth, name }) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1024px)");
  return (
    <Select
      onChange={onChange}
      id="category"
      placeholder="Select"
      name={name && name}
      maxWidth={isLargerThan1280 && maxWidth && maxWidth}
      cursor="pointer"
    >
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </Select>
  );
};

export default ItemCategorySelect;
