const range = function(start, end){
  let myArr = [start];
  if (start > end){
    return [];
  }
  return myArr.concat(range(start+1, end));
};

const sumRec = function(arr){
  if (arr.length === 1){
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
};

const exponent = function(base, exp){
  if (exp === 0){
    return 1;
  }
  return base * exponent(base, exp - 1);
};

const fibonacci = function(n){
  if (n<=0){
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2){
    return [0,1];
  }
  let el = (fibonacci(n-2)[fibonacci(n-2).length - 1] + fibonacci(n-1)[fibonacci(n-1).length - 1]);
  console.log(fibonacci(n-1));
  let arr =  fibonacci(n-1);
  arr.push(el);
  return arr;
};


const bsearch = function(arr, target){
  let low = 0;
  let high = arr.length-1;
  while (low<=high){
    let mid = Math.floor((low+high)/2);
    if (arr[mid]===target){
      return mid;
    }
    if (target < arr[mid]){
      high = mid-1;
    }else if(target > arr[mid]){
      low = mid+1;
    }
  }
  return -1;
};

const recBsearch = function(arr, target){

  let low = 0;
  let high = arr.length-1;
    let mid = Math.floor((low+high)/2);
    if (arr[mid]===target){
      return mid;
    }
    if (target < arr[mid]){
      let newArr = arr.slice(0, mid);
      return recBsearch(newArr, target);
    }else if(target > arr[mid]){
      let newArr = arr.slice(mid+1);
      return (mid + recBsearch(newArr, target)+1);
    }
};

const mergeSort = function(arr){
  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length-1/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);

};

const merge = function(left, right){
    const mergedArr = [];

    while ((left.length !== 0) && (right.length !== 0)){
      if(left[0] <= right[0]){
        mergedArr.push(left.shift());
      }
      else {
        mergedArr.push(right.shift());
      }
    }

    return mergedArr.concat(left).concat(right);
};

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
};

const subsets = function(arr){
  if (arr.length<=1){
    return arr;
  }
  let newArr = [];
  for(var i = 0; i<arr.length; i++){
    let tempArr = arr.slice();
    tempArr.splice(i, 1);
    let subsetss = subsets(tempArr);
    subsetss.forEach(function(subset){
      newArr.push([arr[i]].concat(subset));
    });
  }
  //console.log(newArr)
  return newArr;
};






//
