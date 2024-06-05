
var myArray = ["mahmoud","mahdi","rania",'younes','radar']

function renverser(str){
  var resultat =""
  for(let i= str.length -1;i>=0;i--){
      resultat += str[i]
  }
  return resultat
}
function palindrom(str){
  return str == renverser(str)
}

function verifier(mylist){
  for(let i of mylist){
    if(palindrom(i)){
      return true
    }
  }
  return false
}

console.log(verifier(myArray))


    



