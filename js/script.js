console.log('memory')

let start = document.getElementById('start')

start.addEventListener('click', function () {

  let userNumList = []
  let randomNumList = numGenerate(5, 1, 100)
  let guessNum = []
  
  alert("Memorizza questi numeri: " + randomNumList)
  console.log(randomNumList)

  setTimeout(function () {
    while (userNumList.length < randomNumList.length) {
      let userNum = parseInt(prompt("inserisci i numeri visti poco fa"))
      if (randomNumList.includes(userNum) && !userNumList.includes(userNum)) {
        guessNum.push(userNum)
      }

      userNumList.push(userNum)

    }
    alert("Hai indovinato " + guessNum.length + 'numeri:  I numeri indovinati sono questi: ' + guessNum)
    console.log(guessNum)

  }, 3000)


})

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function numGenerate(length, min, max) {
	let randomNumList = []

	while (randomNumList.length < length) {
		const userNum = randomNum(min, max)
		if (!randomNumList.includes(userNum)) {
			randomNumList.push(userNum)
		}
	}
	return randomNumList
}
