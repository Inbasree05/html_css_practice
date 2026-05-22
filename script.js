const btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    const colors=["red","blue","green","yellow","orange","purple"];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomColor;
});