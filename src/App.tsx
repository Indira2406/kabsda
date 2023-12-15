import React, { useReducer, useState } from "react";
import "./App.css";
import { Accordion } from "./Accordion/Accordion";
import { Rating, RatingValueType } from "./Rating/Rating";
import { OnOff } from "./OnOff/OnOff";
import { reducer, toggleAccordionAC } from "./reducer";
import { Select } from "./Select/Select";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  // const [collapsedAccordion, setCollapsedAccordion] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [collapsedAccordion, collapsedAccordionDispatch] = useReducer(reducer, {
    collapsed: false,
  });

  const [value, setValue] = useState("2");

  return (
    <div className="App">
      <Accordion
        titleValue={"Menu"}
        collapsed={collapsedAccordion.collapsed}
        onChange={() => collapsedAccordionDispatch(toggleAccordionAC())}
        onClick={() => {}}
        items={[]}
      />

      <Rating onClick={setRatingValue} value={ratingValue} />

      <OnOff switchOn={switchOn} onChange={setSwitchOn} />
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Astana" },
          { value: "2", title: "Almaty" },
          { value: "3", title: "Karaganda" },
        ]}
      />
    </div>
  );
}

export default App;
