const createRandomBoat = (sea:string[][], square:number,) =>{
   let enemySea:any = sea
   const row = enemySea.length
   let random = Math.floor(Math.random()*row) // 0 - 9
   const isXAxis = (Math.floor(Math.random()*2)+1) % 2 == 0 ? true : false // Boat orientation, x axis or y axis
   let boatCreated = false

   // Find empty shell then create Battleship  or Destroyer (Don't overlap)
   while(!boatCreated){
      // Creating Battleship  or Destroyer on X Axis
      if(isXAxis){
         const  start = Math.floor(Math.random()*square)
         const sliced = enemySea[random].slice(start, start+square)
         const isEmptyShell = sliced.join('').includes('1') ? false : true
         if(isEmptyShell){
            for(let i=start; i<start+square; i++){
               (i==start) ? enemySea[random][i] = '1sx' : (i==start+square-1) ? enemySea[random][i] = '1ex' :enemySea[random][i] = '1x'
            }
            boatCreated = true
            return enemySea
         }else{
            random = Math.floor(Math.random()*row) // 0 - 9
         }
      }
      
      // Creating Battleship  or Destroyer on Y Axis
      if(!isXAxis){
         const  start = Math.floor(Math.random()*square)
         const shells = []
         for(let i=start; i<start+square; i++){
            shells.push(enemySea[i][random])
         }
         const isEmptyShell = shells.join('').includes('1') ? false : true
         if(isEmptyShell){
            for(let i=start; i<start+square; i++){
               (i==start) ? enemySea[i][random] = '1sy' : (i==start+square-1) ? enemySea[i][random] = '1ey' :enemySea[i][random] = '1y'
            }
            boatCreated = true
            return enemySea
         }else{
            random = Math.floor(Math.random()*row) // 0 - 9
         }
         

      }
   }

}

export default createRandomBoat