import { useState } from "react";
import { reviews } from './data';
import surprise from './images/surpise.png';

export default function App() {
  return (
    <div className="canvas">
      <Card />
    </div>
  );
}

function Card() {

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
      <div className="text-container">
        <button className="left-arrow" onClick={subIndex}>⬅</button>
        <button><img src={surprise} alt="" className="surprise" onClick={generateRandom}/></button>
        <button className="right-arrow" onClick={addIndex}>➡</button>
        <p>{currIndex.text}</p>
        <SliderIcons index={index}/>
      </div>
    </div>
  )
}

function SliderIcons({index}) {

      return (
        <div className="slider-container">
          {reviews.map(item => {
            const {id} = item;
            return (
              <div className={`slider-icon ${index + 1 === id && 'active'}`}></div>
            )
          })}
        </div>
      )
}


