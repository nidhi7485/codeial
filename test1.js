function spinWords(backward) {
  var sentence = ''
  var separate = backward.split(' ')

  for (var i = 0; i < separate.length; i++) {
    if (sentence) sentence += ' '
    if (separate[i].length >= 5) {
      sentence += separate[i].split('').reverse().join('')
    } else {
      sentence += separate[i]
    }
  }
  return sentence
}

console.log(spinWords('Hey fellow warriors'))
