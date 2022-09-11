interface IMainSeaProps{
   publicSea : string[][],
   alphabet: string[]
}
function MainSea({publicSea, alphabet}:IMainSeaProps){
   return (
      <div>
        <div style={{ display: "flex", margin: "1px" }}>
              {[0, 1,2,3,4,5,6,7,8,9,10].map((item, i) => {
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

        {publicSea.map((sea, index) => {
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
                      background:`${item=='x'?'rgb(231 103 103)':`${item =='-'?'#70a580': '#e59191'}`}` ,
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

export default MainSea