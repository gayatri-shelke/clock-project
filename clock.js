const minE1=document.querySelector('.min')
const secE1=document.querySelector('.sec')
const hourE1=document.querySelector('.hour')
setInterval(()=>{
const date=new Date;
const secDeg=date.getSeconds()/60*360-90;
const minDeg=date.getMinutes()/60*360-90;
const hourDeg=date.getHours()/12*360-90;
secE1.style.transform=`rotate(${secDeg}deg)`
minE1.style.transform=`rotate(${minDeg}deg)`
hourE1.style.transform=`rotate(${hourDeg}deg)`


},1000)
