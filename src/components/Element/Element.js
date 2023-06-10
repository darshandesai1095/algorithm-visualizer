import './Element.css';

const Element = ( {orderNo, height, active, sorted} ) => {

  return (
    <div 
        className={`element ${active ? "active" : null}`}
        style={{
            height: `${height}px`,
            order: `${orderNo}`,
        }}>
    </div>
  )
}

export default Element;