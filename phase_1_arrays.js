Array.prototype.uniq = function(){
  let newArr = [];
  for(var i=0; i<this.length; i++){
    if (!newArr.includes(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.twoSum = function(){
  let arr = [];
  for(var i =0; i<this.length-1; i++){
    for(var j=i+1; j<this.length; j++){
      if(this[i]+this[j] === 0){
        arr.push([i,j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function(){
  let newArr = [];
  for(var col=0; col<this[0].length; col++){
    let newRow = [];
    for(var row = 0; row<this.length; row++){
      newRow.push(this[row][col]);
    }
    newArr.push(newRow);
  }
  return newArr;
};
