import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./Accordion";
import { Rating, RatingValueType } from "./Rating";
import { OnOff } from "./OnOff/OnOff";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [collapsedAccordion, setCollapsedAccordion] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="App">
      <Accordion
        titleValue={"Menu"}
        collapsed={collapsedAccordion}
        onChange={() => setCollapsedAccordion(!collapsedAccordion)}
      />
      <Rating onClick={setRatingValue} value={ratingValue} />

      <OnOff switchOn={switchOn} onChange={setSwitchOn}/>
    </div>
  );
}

export default App;
