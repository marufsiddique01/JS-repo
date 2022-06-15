function setDate(){
  
  // console.log(i);
  // i++
  const now = new Date()
  const seconds = now.getSeconds()
  const secondDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform= `rotate(${secondDegree}deg)`
  if(seconds <=9){
    secondsNum.textContent= `0${seconds}` 
  }else{
    secondsNum.textContent= seconds 
  }

  // console.log(secondsNum)
  
  const mins = now.getMinutes()
  const minDegree = ((mins / 60) * 360) +90;
  minHand.style.transform= `rotate(${minDegree}deg)`
  
  if(mins <=9){
    minNum.textContent= `0${mins}` 
  }else{
    minNum.textContent= mins 
  }
  
  const hours = now.getHours()
  let newHour;
  const hourDeegree = ((hours / 24) * 360) ;
  hourHand.style.transform= `rotate(${hourDeegree}deg)`
  hourNum.textContent= hours
  // 12 hour format
  if(hours <=12){
    newHour = hours
    // minNum.textContent= `0${mins}` 
  }else{
    newHour = hours - 12 
  }

  // adding double space hour
  if(newHour <=9){
    hourNum.textContent= `0${newHour}`
  }else{
    hourNum.textContent= newHour
  }



  


  if(hours < 12){
    ampm.textContent= 'AM'
  }else{
    ampm.textContent= 'PM'
  }
  // console.log(secondDegree)
  // console.log(mins)
  // console.log(hours)
}


const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const secondsNum = document.querySelector('.seconds-num')
const minNum = document.querySelector('.minutes-num')
const hourNum = document.querySelector('.hours-num')

const ampm = document.querySelector('.ampm-text')


let i = 0;
setInterval(setDate,1000)
