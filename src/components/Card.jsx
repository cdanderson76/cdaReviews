import { useState } from "react";
import { reviews } from '../data';
import surprise from '../images/surpise.png';
import SliderIcons from "./SliderIcons";

export default function Card() {

  const [ index, setIndex ] = useState(0);

  const currIndex = reviews[index];

  const sepColor = { 
    backgroundColor: `${currIndex.color}`
  }

  function addIndex() {
    if(index < 3) {
      setIndex(prev => prev + 1);
    } else if(index === 3) {
      setIndex(0);
    }
  };

  function subIndex() {
    if(index > 0) {
      setIndex(prev => prev - 1);
    } else if(index === 0) {
      setIndex(3);
    }
  };

  function generateRandom() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  return (
    <div className="container">
      <div className='separator' style={sepColor}>
        <img src={currIndex.image}
             alt={`profile pic of ${currIndex.name}`} 
             className='profile-pic'/>
      </div>
      <h1>{currIndex.name}</h1>
      <h2>{currIndex.job}</h2>
      <div className="button-container">
        <button className='arrow' onClick={subIndex}>⬅️</button>
        <button><img src={surprise} alt="" 
                     className="surprise" 
                     onClick={generateRandom}/>
        </button>
        <button className="arrow" onClick={addIndex}>➡️</button>
      </div>
      <div className="text-container">
        <p>{currIndex.text}</p>
        <SliderIcons index={index}
                     reviews={reviews}
        />
      </div>
    </div>
  )
}