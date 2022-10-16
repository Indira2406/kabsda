import { Story } from "@storybook/react";
import React, { useState } from "react";

import { Rating, RatingProps, RatingValueType } from "./Rating";

const getCategoryObj = (categoryName: "main" | "styles") => ({
  table: {
    category: categoryName,
  },
});

export default {
  title: "custom folder/Rating stories",
  component: Rating,
  argTypes: {
    starsColor: {
      ...getCategoryObj("styles"),
    },
    starsBackgroundColor: {
      ...getCategoryObj("styles"),
    },
    value: {
      ...getCategoryObj("main"),
    },
    onClick: {
      ...getCategoryObj("main"),
    },
  },
};

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
  value: 0,
  onClick: () => {},
};

export const Rating1 = Template.bind({});
Rating1.args = {
  value: 1,
  onClick: () => {},
};

export const Rating2 = Template.bind({});
Rating2.args = {
  value: 2,
  onClick: () => {},
};
export const Rating3 = Template.bind({});
Rating3.args = {
  value: 3,
  onClick: () => {},
};
export const Rating4 = Template.bind({});
Rating4.args = {
  value: 4,
  onClick: () => {},
};
export const Rating5 = Template.bind({});
Rating5.args = {
  value: 5,
  onClick: () => {},
};

export const ChangingRating: Story<RatingProps> = (args) => {
  const [rating, setRating] = useState<RatingValueType>(2);

  return <Rating {...args} value={rating} onClick={setRating} />;
};
