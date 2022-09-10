const createSea = (row:number, col:number) => {
   const sea: string[][] = []
   for(let i=0; i<row; i++){
      sea[i] = []
      for(let j=0; j<col; j++){
         sea[i][j] = '.'
      }
   }
   return sea
}

export default createSea