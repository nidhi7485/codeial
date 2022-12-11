const s = ` john    have an apple The sky is blue. they get a coin      .`

const corr = (s) => {
  let ns = ''

  for (let i = 0; i < s.length; i++) {
    let ch = s[i]
    if (i == 0) {
      while (s[i] == ' ') {
        i++
      }
      ch = s[i]
      ns = ns + ch.toUpperCase()
      continue
    }
    if (s[i] == ' ') {
      if (s[i + 1] == ' ') {
        while (s[i] == ' ') {
          i++
        }
        if (i !== s.length && i !== s.length - 1) {
          ns = ns + ' '
        }
      } else {
        if (s.charCodeAt(i + 1) <= 122 && s.charCodeAt(i + 1) >= 97) {
          ns = ns + ' '
        } else if (s.charCodeAt(i + 1) <= 90 && s.charCodeAt(i + 1) >= 65) {
          ns = ns + '. '
        }
      }
    } else if (s[i] == '.') {
      ns = ns + s[i] + ' '
      while (s[i + 1] == ' ') {
        i++
      }
      ch = s[i + 1]
      //   console.log(s[i + 1]);
      ns = ns + ch.toUpperCase()
      i++
    } else {
      ns = ns + s[i]
    }
  }
  ns = ns + '.'
  return ns
}
let newString = corr(s)
console.log(newString)
