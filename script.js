// Create 10x10 sea
const createSea = (row, col) => {
   const sea = []
   for(let i=0; i<row; i++){
      sea[i] = []
      for(let j=0; j<col; j++){
         sea[i][j] = []
      }
   }
   return sea
}



let sea = createSea(10, 10)

// Create Random Boat to the Sea
const createRandomBoat = (sea, square, amount) =>{
   let enemySea = sea
   const row = enemySea.length
   let random = Math.floor(Math.random()*row) // 0 - 9
   const isXAxis = (Math.floor(Math.random()*2)+1) % 2 == 0 ? true : false // Boat orientation, x axis or y axis
   console.log(isXAxis?"x axis":"y axis");
   let boatCreated = false
   while(!boatCreated){
      if(isXAxis){
         const  start = Math.floor(Math.random()*square)
         const sliced = enemySea[random].slice(start, start+square)
         const isEmptyShell = sliced.join('').includes('1') ? false : true
         if(isEmptyShell){
            for(let i=start; i<start+square; i++){
               enemySea[random][i] = '1'
            }
            boatCreated = true
            return enemySea
         }else{
            random = Math.floor(Math.random()*row) // 0 - 9
         }
      }
      
      if(!isXAxis){
         const  start = Math.floor(Math.random()*square)
         const shells = []
         for(let i=start; i<start+square; i++){
            shells.push(enemySea[i][random])
         }
         const isEmptyShell = shells.join('').includes('1') ? false : true
         if(isEmptyShell){
            for(let i=start; i<start+square; i++){
               enemySea[i][random] = '1'
            }
            boatCreated = true
            return enemySea
         }else{
            random = Math.floor(Math.random()*row) // 0 - 9
         }
         

      }
   }

}
sea =  createRandomBoat(sea, 5, 1)
sea =  createRandomBoat(sea, 4, 1)
sea =  createRandomBoat(sea, 4, 1)



