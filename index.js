const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

//WRONG
function appendKitten(name){
  var newKitten = kittens.slice();
  newKitten.push(name);
  return newKitten
}
