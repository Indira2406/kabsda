import { Story } from "@storybook/react";
import React, { useState } from "react";

import { OnOff, OnOffType } from "./OnOff";

export default {
  title: "OnOff component",
  component: OnOff,
};
const Template: Story<OnOffType> = (args) => <OnOff {...args} />;

export const OnSwitched = Template.bind({});
OnSwitched.args = {
  switchOn: true,
  onChange: () => {},
};

export const OffSwitched = Template.bind({});
OffSwitched.args = {
  switchOn: false,
  onChange: () => {},
};

export const ControlSwitch: Story<OnOffType> = (args) => {
  const [switched, setSwitched] = useState(true);

  return <OnOff {...args} switchOn={switched} onChange={setSwitched} />;
};
