import './Element.css';

const Element = ( {orderNo, height, active, sorted} ) => {

  return (
    <div 
        className="element" 
        style={{
            height: `${height}px`,
            order: `${orderNo}`
        }}>
    </div>
  )
}

export default Element;