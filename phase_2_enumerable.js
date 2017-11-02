

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const funcOne = function(int){
  int ++;
  console.log(int);
};

const funcThree = function(int){
  return int + 1;

};

const funcFour = function(x, y){
  return x+y;

};


const funcTwo= function(arr){
  arr.push(1);
};

Array.prototype.myMap = function(callback) {
  const myArr = [];
  let callbackTwo = function(el) {
    myArr.push(callback(el));
  };
  this.myEach(callbackTwo);
  return myArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let myArr = this.slice();

  if (initialValue===undefined){
    initialValue = myArr.shift();
  }
  let callbackTwo = function(el){
    initialValue = callback(initialValue, el);
  };
  myArr.myEach(callbackTwo);
  return initialValue;
};
