import { useState } from 'react';
import './Wh.css';

export function Bop () { 
  const [Name, setName] = useState("Name");
  const [Name2, setName2] = useState("Name");
  const [value, setValue] = useState("Mission");
  const [ Round, setround ] = useState(0);
  const [ Cp, setCp ] = useState(0);
  const [ Cp2, setCp2 ] = useState(0);
  const [ Vp, setVp ] = useState(0);
  const [ Vp2, setVp2 ] = useState(0);
  const [ Primary, setPrimary ] = useState(0);
  const [ Primary2, setPrimary2 ] = useState(0);
  const [ Sec1, setSec1 ] = useState(0);
  const [ Sec12, setSec12 ] = useState(0);
  const [ Sec2, setSec2 ] = useState(0);
  const [ Sec22, setSec22 ] = useState(0);
  const [ Sec3, setSec3 ] = useState(0);
  const [ Sec32, setSec32 ] = useState(0);

  function handleN () {
    setValue(prompt(value));
  }

  function handleName () {
    setName((prompt(Name)));
  }

  function handleName2 () {
    setName2((prompt(Name2)));
  }

  function handleR () {
    setround(Round + 1);
  }

  function handleClick () {
    setCp(Cp + 1);
    setVp(Vp + 1);
  }

  function handleClick2 () {
    setCp2(Cp2 + 1);
    setVp2(Vp2 + 1);
  }

  function handleS () {
    setSec1(Sec1 + 1);
    setVp(Vp + 1);
  }

  function handleS2 () {
    setSec12(Sec12 + 1);
    setVp2(Vp2 + 1);
  }

  function handlePri () {
    setPrimary(Primary + 1);
    setVp(Vp + 1);
  }

  function handlePri2 () {
    setPrimary2(Primary2 + 1);
    setVp2(Vp2 + 1);
  }
    
  function handleSe () {
    setSec2(Sec2 + 1);
    setVp(Vp + 1);
  }

  function handleSe2 () {
    setSec22(Sec22 + 1);
    setVp2(Vp2 + 1);
  }

  function handleSec () {
    setSec3(Sec3 + 1);
    setVp(Vp + 1);
  }

  function handleSec3 () {
    setSec32(Sec32 + 1);
    setVp2(Vp2 + 1);
  }

  return (
    <div className="general">
      <div className="generalInfo">
        <h1 input style={{cursor:"pointer"}} onClick={handleN}>{ value }</h1>
        <h2  className="raund" style={{cursor:"pointer"}} onClick={handleR}>Round: { Round }</h2>
      </div>
      <div className="info">
        <div className="box">
          <h3 className="words" style={{cursor:"pointer"}} onClick={handleName}>Faction: { Name }</h3>
          <p className="words" style={{cursor:"pointer"}} onClick={handleClick}>CP: { Cp } </p>
          <p className="words"> VP: { Vp } </p>
          <p className="words" style={{cursor:"pointer"}} onClick={handlePri}>Primary: { Primary } </p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleS}>Sec 1: { Sec1 }</p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleSe}>Sec 2: { Sec2 }</p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleSec}>Sec 3: { Sec3 }</p>
        </div>
        <div className="boxx">
          <h3 className="words" style={{cursor:"pointer"}} onClick={handleName2}>Faction: { Name2 }</h3>
          <p className="words" style={{cursor:"pointer"}} onClick={handleClick2}>CP: { Cp2 } </p>
          <p className="words"> VP: { Vp2 } </p>
          <p className="words" style={{cursor:"pointer"}} onClick={handlePri2}>Primary: { Primary2 } </p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleS2}>Sec 1: { Sec12 }</p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleSe2}>Sec 2: { Sec22 }</p>
          <p className="words" style={{cursor:"pointer"}} onClick={handleSec3}>Sec 3: { Sec32 }</p>
        </div>
      </div> 
    </div>
  )
}