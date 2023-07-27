/* objeto global  */

window.onload = ()=>{
    const audio = document.createElement("audio");
    audio.src = "../../assets/MUSIC/AVENGERS2.mp3";
    audio.loop=true;
    audio.autoplay=true;
   
    audio.controls = false;
   
   
    document.body.appendChild(audio);
    
    console.log(audio);

 
}
