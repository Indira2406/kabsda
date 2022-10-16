import React  from 'react';

import './OnOff.css';

export type OnOffType = {
  switchOn: boolean;
  onChange: (switchOn: boolean)=> void;
}
export function OnOff(props: OnOffType) {
 
  const onChecked = props.switchOn && ' on';
  const offChecked = !props.switchOn && ' off';

  return (
    <div className='wrap'>
      <button className={`block ${onChecked}`} onClick={() => props.onChange(true)}>On</button>
      <button className={`block + ${offChecked}`} onClick={() => props.onChange(false)}>Off</button>
      <div className={`circle + ' ' + ${props.switchOn ? 'on' : 'off'}`}></div>
    </div>
  );
};

