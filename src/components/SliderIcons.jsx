
export default function SliderIcons({index, reviews}) {

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