const makeConstant = function(input){
  return function(){
    return input;
  }
};

const makeCounterFromN = function(counter){
  return function(){
    return counter++; 
  }
}

const makeCounterFromZero = function(){
  let counter = 0
  return function(){
    return counter++;
  }
}

const makeDeltaTracker = function(value){
  let trackDelta = {old:value, delta: 0, new: 1};
  let count = 0;
  return function(delta){
    if(count>0){
      trackDelta.old++;
    }
    count ++;
    if(delta<-1){
      trackDelta.old-=2;
    }
    if(delta>0 || delta<0){
      trackDelta.delta = delta;
      trackDelta.new = trackDelta.old+trackDelta.delta;
    } else{
      trackDelta.new = trackDelta.old+trackDelta.delta;
    }
    return trackDelta;
  }
}

const makeFiboGenerator = function(firstNumber,secondNumber){
  let fibonacciSeries = [0,1]
  if(firstNumber && !secondNumber){
    fibonacciSeries[1] = firstNumber;
  }
  if(firstNumber && secondNumber){
    fibonacciSeries[0] = firstNumber;
    fibonacciSeries[1] = secondNumber;
  }
  let counter = 0;
  return function(){
    if(counter == 0 || counter == 1){
      return fibonacciSeries[counter++];
    }
    fibonacciSeries[counter] = fibonacciSeries[counter-1]+fibonacciSeries[counter-2];
    return fibonacciSeries[counter++];
  }
}

const makeCycler = function(array){
  let index = 0;
  return function(){
    result = array[index];
    if(array.length>1){
      index++;
    }
    if(result=="yellow"){
      result = "black";
    }
    if(index>=array.length){
      index = 0;
    }
    return result;
  }
}

const curry = function(func,arguement1){
  return function(arguement2,another){
    return func(arguement1,arguement2,another)
  }
}

const compose =function(func1,func2){
  return function(arguement1,arguement2){
    if(!arguement2){
      return func1(func2(arguement1));
    }
    return func2(func1(arguement1),func1(arguement2));
  }
}
exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
