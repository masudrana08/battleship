import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import createSea from "./utils/createSea";
import createRandomBoat from "./utils/createRandomBoat";

function App() {
  const [hiddenSea, setHiddenSea] = useState<string[][]>([]);
  const [publicSea, setPublicSea] = useState<string[][]>([]);

  useEffect(() => {
    let sea = createSea(10, 10);
    sea = createRandomBoat(sea, 5, 1);
    sea = createRandomBoat(sea, 4, 1);
    sea = createRandomBoat(sea, 4, 1);
    setHiddenSea(sea);
  }, []);

  useEffect(() => {
    let sea = createSea(10, 10);
    setPublicSea(sea);
  }, []);
  console.log(hiddenSea);

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  return (
    <div className="App">
     <div>
        <h3>Hidden Part</h3>
        <div style={{ display: "flex", margin: "1px" }}>
              {[0, 1,2,3,4,5,6,7,8,9,10].map((item) => {
                return (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}{" "}
              <br />
            </div>
        {hiddenSea.map((sea, index) => {
          return (
            <div style={{ display: "flex", margin: "1px" }}>
               <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {alphabet[index]}
                  </div>
              {sea.map((item) => {
                return (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}{" "}
              <br />
            </div>
          );
        })}
      </div>
      <div>
        <h3>Sea</h3>
        <div style={{ display: "flex", margin: "1px" }}>
              {[0, 1,2,3,4,5,6,7,8,9,10].map((item) => {
                return (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}{" "}
              <br />
            </div>
        {publicSea.map((sea, index) => {
          return (
            <div style={{ display: "flex", margin: "1px" }}>
               <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {alphabet[index]}
                  </div>
              {sea.map((item) => {
                return (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#e59191",
                      margin: "1px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}{" "}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
