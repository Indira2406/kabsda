import React from 'react';

type RatingPropsType = {
  value: 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1}/>
      <Star selected={props.value > 2}/>
      <Star selected={props.value > 3}/>
      <Star selected={props.value > 4}/>

      </div>
  );
};

type StarsProps = {
  selected: boolean;
}

export function Star(props: StarsProps) {
  return (
      <span style={props.selected ? {fontWeight: '700'} : undefined}>star </span>
  );
};