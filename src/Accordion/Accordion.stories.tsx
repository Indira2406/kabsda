import { Story } from "@storybook/react";
import React, { useState } from "react";
import {action} from '@storybook/addon-actions'
import { Accordion, AccordionProps } from "./Accordion";

export default {
  title: "Accordion component",
  component: Accordion,
};

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;
const onClickCallback = action('some item was clicked')

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
  titleValue: "Header",
  collapsed: true,
  onChange: () => {},
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
  titleValue: "Header",
  collapsed: false,
  onChange: () => {},
  onClick: onClickCallback,
  items: [
    { title: "Dimuch", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Igor", value: 3 },
    { title: "Ignat", value: 4 },
    { title: "Sasha", value: 5 },
  ],
};

export const CollapseSwitch: Story<AccordionProps> = (args) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Accordion
      {...args}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
CollapseSwitch.args = {
  titleValue: "Header",
  items: [
    { title: "Dimuch", value: 1 },
    { title: "Valera", value: 2 },
    { title: "Igor", value: 3 },
    { title: "Ignat", value: 4 },
    { title: "Sasha", value: 5 },
  ],
  onClick: onClickCallback,
};


