import React from "react";

interface AccordionPropsTitle {
  titleValue: string;
  collapsed: boolean;
  onChange: (collapsed: boolean) => void;
}



type ItemsType = {
  title: string;
  value: any;
}


export type AccordionProps = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemsType[];
  onClick: (value: any) => void
};

export function Accordion(props: AccordionProps) {
  return (
    <>
      <AccordionTitle
        titleValue={props.titleValue}
        collapsed={props.collapsed}
        onChange={props.onChange}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
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

type AccordionPropsBody = {
  items: ItemsType[];
  onClick: (value: any) => void
}
export function AccordionBody(props: AccordionPropsBody) {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
