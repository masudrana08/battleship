const isWin = (publicSea:string[][], hiddenSea:string[][]):boolean => {
   for(let row=0; row<hiddenSea.length; row++){
      for(let col=0; col<hiddenSea[row].length; col++){
         const currentPosition = hiddenSea[row][col]
         // For x axis
         if(currentPosition.includes('1sx')){
            console.log('x axis selected');
            
            let whileCol = col
            let hits = ''
            while(!(hiddenSea[row][whileCol].includes('.'))){
               hits += publicSea[row][whileCol]
               whileCol+=1
            }
            console.log(hits, 'hits 1');
            if(!hits.includes('.')){
               
               
               return true
            }
            
         }
         // For y axis
         if(currentPosition.includes('1sy')){
            console.log('y axis selected');
            let whileRow = row
            let hits = ''
            while(!(hiddenSea[whileRow][col].includes('.'))){
               hits += publicSea[whileRow][col]
               whileRow+=1
            }
            console.log(hits, 'hits 2');
            if(!hits.includes('.')){
               return true
            }
         }
      }
   }
   return false
}
export default isWin