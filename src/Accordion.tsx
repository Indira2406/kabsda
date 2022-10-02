import React, {useState} from 'react';

interface AccordionPropsTitle  {
  titleValue: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}
interface AccordionProps {
  titleValue: string;
}

export function Accordion({titleValue}: AccordionProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <AccordionTitle titleValue={titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
      {
        collapsed &&  <AccordionBody/>
      }
    </>
  );
};

export function AccordionTitle({collapsed, setCollapsed, titleValue}: AccordionPropsTitle) {
  return (
    <button onClick={()=> setCollapsed(!collapsed)} >
      <h3>
        {titleValue}
      </h3>
    </button>

  );
};

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
};