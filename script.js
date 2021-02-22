document.getElementById('verify').addEventListener('click', verifyButton)

let age = 0
let day = 'Tuesday'

function verifyButton () {
  age = document.getElementById('age').value
  age = parseInt(age)

  day = document.getElementById('day').value

  if ((day == 'Tuesday' || day == 'Thursday') || (age > 12 && age < 21)) {
    document.getElementById('price').innerHTML = 'You are eligible for student pricing'
  } else {
    document.getElementById('price').innerHTML = 'You must pay regular price'
  }
}
