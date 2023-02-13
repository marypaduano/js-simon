console.log('memory')

let start = document.getElementById('start')

start.addEventListener('click', function () {

  let userNumList = []
  let randomNumList = []
  let randomNum
  let userNum

  for (let i = 0; i < 5; i++) {
    randomNum = randomNumGenerate(1, 100)
    console.log(randomNum)
    randomNumList.push(randomNum)
  }
  console.log(randomNumList)
  alert("Memorizza questi numeri: " + randomNumList)

  setTimeout(function () {

    for (let i = 0; i < 5; i++) {
      numeroPrompt = parseInt(prompt("inserisci i numeri visti poco fa"))
      for (let a = 0; a < randomNumList.length; a++) {
        if (userNum == randomNumList[a]) {
          userNumList.push(userNum)
        }
      }

    }
    alert("Hai indovinato i numeri: " + userNumList)
    console.log(userNumList)

  }, 3000)


})




function randomNumGenerate(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
