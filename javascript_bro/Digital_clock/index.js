


function updateClock(){
    const now=new Date();
    let hour=now.getHours();
    const shanto= hour>=12 ?"PM":"AM";
    hour=hour%12||12;
    hour=hour.toString().padStart(2,0)
    const minites=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const Timestring=`${hour}:${minites}:${seconds}  ${shanto}`;
    document.getElementById("clock").textContent=Timestring;
}
updateClock();
setInterval(() => {
    updateClock();
    
}, 1000);