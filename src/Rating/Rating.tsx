import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingProps = {
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
  starsColor?: string;
  starsBackgroundColor?: string;
};

export function Rating(props: RatingProps) {
  return (
    <div>
      <Star
        selected={props.value > 0}
        onClick={props.onClick}
        value={1}
        color={props.starsColor}
        backgroundColor={props.starsBackgroundColor}
      />
      <Star
        selected={props.value > 1}
        onClick={props.onClick}
        value={2}
        color={props.starsColor}
        backgroundColor={props.starsBackgroundColor}
      />
      <Star
        selected={props.value > 2}
        onClick={props.onClick}
        value={3}
        color={props.starsColor}
        backgroundColor={props.starsBackgroundColor}
      />
      <Star
        selected={props.value > 3}
        onClick={props.onClick}
        value={4}
        color={props.starsColor}
        backgroundColor={props.starsBackgroundColor}
      />
      <Star
        selected={props.value > 4}
        onClick={props.onClick}
        value={5}
        color={props.starsColor}
        backgroundColor={props.starsBackgroundColor}
      />
    </div>
  );
}

type StarsProps = {
  selected: boolean;
  onClick: (value: RatingValueType) => void;
  value: RatingValueType;
  color?: string;
  backgroundColor?: string;
};

export function Star(props: StarsProps) {
  return (
    <button
      onClick={() => props.onClick(props.value)}
      style={{
        fontWeight: props.selected ? "700" : "400",
        color: props.color ? props.color : "black",
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "white",
      }}
    >
      star{" "}
    </button>
  );
}
