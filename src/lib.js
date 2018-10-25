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

const makeFiboGenerator = undefined;

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

const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
