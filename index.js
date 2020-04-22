var katzDeliLine = [];

function takeANumber (katzDeliLine, newName) {
  console.log (`Welcome, ${newName}. You are number in line`)

  //indexOf(katzDeliLine) = i + 1
}

function nowServing (katzDeliLine) {
  console.log(katzDeliLine.shift())
if (katzDeliLine.length <= 0){
  return "There is nobody waiting to be served."
}
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length <= 0){
    return "The line is currently empty."
}
