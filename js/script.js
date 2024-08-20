function getTimes(){
  let mainTime=new Date();
  let mainMinute=mainTime.getMinutes()<10?"0"+mainTime.getMinutes():mainTime.getMinutes();
  let mainHour=mainTime.getHours()<10?"0"+mainTime.getHours():mainTime.getHours();
  let mainSecond=mainTime.getSeconds()<10?"0"+mainTime.getSeconds():mainTime.getSeconds();
  let mainDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],Mainmonths=['January','February','March','April','May','June','July','August','September','October','November','December']
  let mainmonth=Mainmonths[mainTime.getMonth()];
  let mainday=mainDays[mainTime.getDay()];
  let maintime=mainHour>12?"PM":"AM";
  let maintian;
if(mainHour==0){
  maintian= 12;
}
else if(mainHour>12){
  maintian=mainHour-12;
}
else{
  maintian=mainHour;
}

  
    document.querySelector('#hour').textContent=maintian;
    document.querySelector('#min').textContent=mainMinute;
    document.querySelector('#sec').textContent=mainSecond;
   document.querySelector('#sec2').textContent=maintime;
    
 
    
    document.querySelector('h2').textContent=mainmonth + "," + mainday;
  
  
   
}




setInterval(getTimes, 1000);
getTimes()


