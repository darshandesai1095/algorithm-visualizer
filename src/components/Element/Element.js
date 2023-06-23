import './Element.css';

const Element = ( {orderNo, width, height, active, sorted} ) => {

  return (
    <div 
        className={`element ${active ? "active" : null}`}
        style={{
            width: `${width}vw`,
            height: `${height}px`,
            order: `${orderNo}`,
        }}>
    </div>
  )
}

export default Element;