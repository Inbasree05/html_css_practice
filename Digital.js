function Digital(){
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let period="AM";
    if(hours>=12){
        period="PM";
    }
    if(hours>=12){
        hours=hours-12;
    }
    if(hours<10){
        hours=`0${hours}`;
    }
    if(minutes<10){
        minutes=`0${minutes}`;
    }
    if(seconds<10){
        seconds=`0${seconds}`;
    }
    let currentTime=`${hours}:${minutes}:${seconds}`;
    let time=document.getElementById("time");
    time.textContent=currentTime;
    if(period==="AM"){
        document.body.style.background =
            "linear-gradient(to right, #ffecd2, #fcb69f)";
    } else {
        document.body.style.background =
            "linear-gradient(to right, #141414, #000000)";
    }
}
setInterval(Digital,1000);
Digital();