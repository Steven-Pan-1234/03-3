let age = 0

document.getElementById('button').addEventListener('click', movie)

function movie () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 17) {
    document.getElementById('p').innerHTML = 'R movie'
  }

  else if (age >= 13) {
    document.getElementById('p').innerHTML = 'PG-13 movie'
  }

  else {
    document.getElementById('p').innerHTML = 'G or PG movie'
  }
}
