
Array.prototype.bubbleSort = function(){
  let newArr = this.slice();
  let swapped = true;
  while (swapped){
    swapped = false;
    for(var i = 0; i<newArr.length-1; i++){
      if (newArr[i]>newArr[i+1]){
        let temp = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = temp;
        swapped = true;
      }
    }
  }
  return newArr;
};

String.prototype.substrings = function(){
  let arr = [];
  let win = this.length;
  while (win >= 1){
    let i = 0;

    while(i+win <= this.length){
      console.log(i);
      arr.push(this.slice(i, win+1));
      i += 1;
    }
    win -= 1;
  }
  return arr;
};
