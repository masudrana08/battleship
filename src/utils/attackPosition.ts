const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const attackPosition = (publicSea:string[][], hiddenSea:string[][], shots:string[]):string[][] => {
   let mysea:string[][] = publicSea
   
   for(let i=0; i<shots.length; i++){
      const row = alphabet.indexOf(shots[i][0].toUpperCase())
      const col = Number(shots[i][1])-1
      console.log(row, col, 'row, col');
      
      const isHit = hiddenSea[row][col].includes('1')
      if(isHit){
         mysea[row][col] = 'x'
      }  else{
         mysea[row][col] = '-'
      }   
   }
   console.log(mysea, 'mysea');
   
   return mysea
}
export default attackPosition