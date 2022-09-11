interface IHiddenSeaProps{
  mySea:string[][],
  alphabet: string[]
}

export function HiddenSea({mySea, alphabet}:IHiddenSeaProps){
   return (
      <div>
        <h4>Randomly created 1 Battleship and 2 Destroyers</h4>
        <div style={{ display: "flex", margin: "1px" }}>
              {[0, 1,2,3,4,5,6,7,8,9,10].map((item,i) => {
                return (
                  <div key={i}
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

        {mySea.map((sea, index) => {
          return (
            <div key={index} style={{ display: "flex", margin: "1px" }}>
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
                  
              {sea.map((item, i) => {
                return (
                  <div key={i}
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
   )
}

