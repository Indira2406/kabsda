import React  from "react";

interface AccordionPropsTitle {
  titleValue: string;
  collapsed: boolean;
  onChange: (collapsed: boolean) => void;
}
export type AccordionProps = {
      /** headers text */
  titleValue: string;
/**if component collapsed */
  collapsed: boolean;
  onChange: () => void;
}

export function Accordion(props: AccordionProps) {
  return (
    <>
      <AccordionTitle
        titleValue={props.titleValue}
        collapsed={props.collapsed}
        onChange={props.onChange}
      />
      {!props.collapsed && <AccordionBody />}
    </>
  );
}

export function AccordionTitle({
  collapsed,
  onChange,
  titleValue,
}: AccordionPropsTitle) {
  return (
    <button onClick={() => onChange(!collapsed)}>
      <h3>{titleValue}</h3>
    </button>
  );
}

export function AccordionBody() {
  return (
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
