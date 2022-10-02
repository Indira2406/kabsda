import React, {useState} from 'react';



export function Rating() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <Star selected={value > 0} setValue={()=>setValue(1)}/>
      <Star selected={value > 1} setValue={()=>setValue(2)}/>
      <Star selected={value > 2} setValue={()=>setValue(3)}/>
      <Star selected={value > 3} setValue={()=>setValue(4)}/>
      <Star selected={value > 4} setValue={()=>setValue(5)}/>

      </div>
  );
};

type StarsProps = {
  selected: boolean;
  setValue: () => void;
}

export function Star(props: StarsProps) {
  return (
      <button onClick={()=> props.setValue()} style={props.selected ? {fontWeight: '700'} : undefined}>star </button>
  );
};