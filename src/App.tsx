import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import createSea from "./utils/createSea";
import createRandomBoat from "./utils/createRandomBoat";
import attackPosition from "./utils/attackPosition";
import isWin from "./utils/isWin";
import { HiddenSea } from "./components/HiddenSea";
import MainSea from "./components/MainSea";

function App() {
  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
  const attackBtnRef = useRef<HTMLButtonElement>(document.createElement("button"));

  const [hiddenSea, setHiddenSea] = useState<string[][]>([]);
  const [publicSea, setPublicSea] = useState<string[][]>([]);
  const [shots, setShots] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  // Creating Hidden Sea and Random Boat. (5 = Battleship and 4 = Destroyer)
  useEffect(() => {
    let sea = createSea(10, 10);
    sea = createRandomBoat(sea, 5);
    sea = createRandomBoat(sea, 4);
    sea = createRandomBoat(sea, 4);
    setHiddenSea(sea);
  }, []);

  // Creating Visible Sea
  useEffect(() => {
    let sea = createSea(10, 10);
    setPublicSea(sea);
  }, []);

  // After every attack it will call
  attackBtnRef.current.onclick = function () {
    const inputValue = inputRef.current.value;
    const allshots = [...shots, inputValue];
    setShots(allshots);

    const myPublicSea = attackPosition(publicSea, hiddenSea, allshots);
    setPublicSea(myPublicSea);
    
    const win = isWin(myPublicSea, hiddenSea);
    setWin(win);
  };

  return (
    <div className="App">
      <HiddenSea mySea={hiddenSea} alphabet={alphabet} />

      {/* Taken Input from Here */}
      <div>
        <div style={{margin: '20px 0'}}>
          <input ref={inputRef} type="text" placeholder="A1" />
          <button ref={attackBtnRef} type="button">
            Attack
          </button>
        </div>

        <MainSea publicSea={publicSea} alphabet={alphabet} />

        {/* Showing Win Result  */}
        <div>
          {win && (
            <p style={{ color: "rgb(205 29 29)" }}>
              Well done! You completed the game in {shots.length} shots
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
