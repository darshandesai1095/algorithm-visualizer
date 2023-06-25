import './Main.css';
import { useState } from 'react';
import MetaData from '../MetaData/MetaData';
import Visualization from '../Visualization/Visualization';

const Main = () => {

  const [metaData, setMetaData] = useState({
    iterations: 0,
    comparisons: 0,
    swaps: 0,
    shifts: 0
})

  return (
    <div className="main">
        <MetaData metaData={metaData}/>
        <Visualization setMetaData={setMetaData} metaData={metaData}/>
    </div>
  )
}

export default Main;