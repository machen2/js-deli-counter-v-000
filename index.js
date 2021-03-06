var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var theCurrentLine = "The line is currently:"

  if(line.length === 0) {
    return "The line is currently empty."
  }

  for(let i = 0; i < line.length; i++) {
    if(i === line.length - 1){
      theCurrentLine += ` ${i + 1}. ${line[i]}`
    } else {
      theCurrentLine += ` ${i + 1}. ${line[i]},`
    }
  }

  return theCurrentLine
}
