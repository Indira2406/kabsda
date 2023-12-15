import { Story } from "@storybook/react";
import React, { useState } from "react";
import { Select, SelectPropsType } from "./Select";

// const getCategoryObj = (categoryName: "main" | "styles") => ({
//   table: {
//     category: categoryName,
//   },
// });

export default {
  title: "Select",
  component: Select,
};



export const WithValue: Story<SelectPropsType> = () => {
  const [value, setValue] = useState('2')

  return <Select  onChange= {setValue}
  value={value}
  items= {[
    { value: "1", title: "Astana" },
    { value: "2", title: "Almaty" },
    { value: "3", title: "Karaganda" },
  ]} />;
};


export const WithoutValue: Story<SelectPropsType> = () => {
  const [value, setValue] = useState(null)

  return <Select  onChange= {setValue}
  value={value}
  items= {[
    { value: "1", title: "Astana" },
    { value: "2", title: "Almaty" },
    { value: "3", title: "Karaganda" },
  ]} />;
};


