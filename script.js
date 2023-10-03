const now=new Date();
const hours=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();
document.getElementById("timer").innerText=`${hours}:${minutes}:${seconds}`;
