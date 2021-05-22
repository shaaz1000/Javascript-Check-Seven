// array [1,2,3,4,5,6,7]
// array [1,2,3,6,9]
// array [1,2,3,4,7,9,97]
const sevenArray = []

function checkSeven(array){
  const data = array.toString()
  const splitData = data.split("")
  for(let i=0;i<splitData.length;i++){
    if(splitData[i]==7){
      sevenArray.push(splitData[i])
    }
  }
  
}

console.log(checkSeven([1,2,3,4,5,6,7]))
if(sevenArray.length>0){
  console.log("Boom")
}
else{
  console.log("Seven does not exist")
}