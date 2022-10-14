const hourel=document.getElementById("hour");
const minutesel=document.getElementById("minutes");
const secondel=document.getElementById("second");
const ampmel=document.getElementById("ampm");
function updateclock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }
    hourel.innerText=h;
    minutesel.innerText=m;
    secondel.innerText=s;
    ampmel.innerText=ampm;
    setTimeout(()=>{
        updateclock();
    },1000);
}
updateclock();