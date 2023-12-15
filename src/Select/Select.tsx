import s from "./Select.module.css";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";

type ItemsType = {
  title: string;
  value: any;
};
export type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemsType[];
};

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

  const toggleItems = () => setActive(!active);

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    action(e.key);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            break;
          }
        }
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={s.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={s.items}>
          {props.items.map((i) => {
            const onItemClicked = () => {
              props.onChange(i.value);
              toggleItems();
            };
            return (
              <div
                onMouseEnter={() => setHoveredElementValue(i.value)}
                key={i.value}
                onClick={onItemClicked}
                className={s.item + " " + (hoveredItem === i ? s.selected : "")}
              >
                {i.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
