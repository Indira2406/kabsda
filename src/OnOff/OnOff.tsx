import React, {useState} from 'react';

import './OnOff.css';


export function OnOff() {
  const [checked, setChecked] = useState(true);

  const onChecked = checked && ' on';
  const offChecked = !checked && ' off';

  return (
    <div className='wrap'>
      <button className={`block ${onChecked}`} onClick={() => setChecked((true))}>On</button>
      <button className={`block + ${offChecked}`} onClick={() => setChecked((false))}>Off</button>
      <div className={`circle + ' ' + ${checked ? 'on' : 'off'}`}></div>
    </div>
  );
};

