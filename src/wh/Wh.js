import { useState } from 'react';
import './Wh.css';

export function Bop () { 
  const [Name, setName] = useState("Name");
  const [value, setValue] = useState("Mission");
  const [ Round, setround ] = useState(0);
  const [ Cp, setCp ] = useState(0);
  const [ Vp, setVp ] = useState(0);
  const [ Primary, setPrimary ] = useState(0);
  const [ Sec1, setSec1 ] = useState(0);
  const [ Sec2, setSec2 ] = useState(0);
  const [ Sec3, setSec3 ] = useState(0);

  function handleN () {
    setValue(prompt(value));
  }

  function handleName () {
    setName((prompt(Name)))
  }

  function handleR () {
    setround(Round + 1);
  }

  function handleClick () {
    setCp(Cp + 1);
    setVp(Vp + 1);
  }

  function handleS () {
    setSec1(Sec1 + 1);
    setVp(Vp + 1);
  }

  function handlePri () {
    setPrimary(Primary + 1);
    setVp(Vp + 1);
  }
    
  function handleSe () {
    setSec2(Sec2 + 1);
    setVp(Vp + 1);
  }

  function handleSec () {
    setSec3(Sec3 + 1);
    setVp(Vp + 1);
  }

  return (
    <div className="general">
      <h1 onClick={handleN}>{ value }</h1>
      <h2 onClick={handleR}>Round { Round }</h2>
      <h3 onClick={handleName}>Faction { Name }</h3>
      <li>
        <p onClick={handleClick}>CP: { Cp } </p>
        <p> VP: { Vp } </p>
        <p onClick={handlePri}>Primary: { Primary } </p>
        <p onClick={handleS}>Sec 1: { Sec1 }</p>
        <p onClick={handleSe}>Sec 2: { Sec2 }</p>
        <p onClick={handleSec}>Sec 3: { Sec3 }</p>
      </li>
    </div>
  )
}