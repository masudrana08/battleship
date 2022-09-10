import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import createSea from './utils/createSea';
import createRandomBoat from './utils/createRandomBoat';

function App() {
  const [hiddenSea, setHiddenSea] = useState<string[][]>([])
  const [publicSea, setPublicSea] = useState<string[][]>([])

  useEffect(()=>{
    let sea = createSea(10, 10)
    sea = createRandomBoat(sea, 5, 1)
    sea = createRandomBoat(sea, 4, 1)
    sea = createRandomBoat(sea, 4, 1)
    setHiddenSea(sea)
  },[])

  useEffect(()=>{
    let sea =createSea(10, 10)
    setPublicSea(sea)
  },[])
console.log(hiddenSea);

  return (
    <div className="App">
     <div>
      <h3>Hidden Sea</h3>
      
     </div>
    </div>
  );
}

export default App;
