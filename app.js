// import { getcurrTime } from 'format-currtime';
var time,hr,mint,sec,date;

var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var todayDate = document.querySelector('.todayDate');
var currtime = document.querySelector('.currTime');

todayDate.textContent = new Date().toLocaleDateString();

setInterval(() => {
    time = new Date();
    hr=time.getHours();
    mint=time.getMinutes();
    sec=time.getSeconds();
    var hands=[
        {
            hand:'hour',
            rotate: (hr*30 + mint/2)+180
        },
        {
            hand:'minute',
            rotate: (mint*6)+180
        },
        {
            hand:'second',
            rotate: (sec*6)+180
        }
    ];
    currtime.innerHTML=getcurrTime(12);
    hour.style.transform=`rotate(${hands[0].rotate}deg)`;
    minute.style.transform=`rotate(${hands[1].rotate}deg)`;
    second.style.transform=`rotate(${hands[2].rotate}deg)`;
    // console.log(sec);
}, 1000);

function getcurrTime(format='24'){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time;
  
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
  
    if(format == 12){
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = (hours === 12) ? 12 : hours % 12;
      time = hours + ':' + minutes +':'+ seconds + ' ' + ampm;
      return time;
    }
    else if(format == 24){
      
      time = hours + ':' + minutes + ':'+ seconds;
      return time;
    }
    else{
        return "!ERROR:Format should be in 12 or 24";
    }
    
  }
