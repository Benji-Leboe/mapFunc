var words = ["ground", "control", "to", "major", "tom"];

console.log(myMap(words, function(word) {
  return word.length;
}));

console.log(myMap(words, function(word) {
  return word.toUpperCase();
}));

console.log(myMap(words, function(word) {
  return word.split('').reverse().join('');
}));

function myMap(arr, cb){
  var newArr = [];
  arr.forEach(function(item){
    newArr.push(cb(item));
  })
  return newArr;
}

