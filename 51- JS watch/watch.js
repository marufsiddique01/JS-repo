function setDate(){
  
  // console.log(i);
  // i++
  const now = new Date()
  const seconds = now.getSeconds()
  const secondDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform= `rotate(${secondDegree}deg)`
  

  const mins = now.getMinutes()
  const minDegree = ((mins / 60) * 360) +90;
  minHand.style.transform= `rotate(${minDegree}deg)`

  const hours = now.getHours()
  const hourDeegree = ((hours / 24) * 360) ;
  hourHand.style.transform= `rotate(${hourDeegree}deg)`

  // console.log(secondDegree)
  // console.log(mins)
  // console.log(hours)
}



const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


let i = 0;
setInterval(setDate,1000)
