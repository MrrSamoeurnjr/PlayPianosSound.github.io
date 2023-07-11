const pianoKeys = document.querySelectorAll(".piano-key .key");
volumeSlider = document.querySelector(".volum-slider input");
keyscheckbox = document.querySelector(".keys-checkbox input");
let audio = new Audio("./Images/a.piano.mp3");
const playTune = (key)=>{
    audio.src = `Images/${key}.piano.mp3`
    audio.play();
    const clickedKey = document.querySelector(`[ data-key = "${key}"]`);//Getting clicked key element
    clickedKey.classList.add(".active")
}
pianoKeys.forEach(key => {
    // Calling playTune function with passing data-key value as an argument
    key.addEventListener("click" ,() => playTune(key.dataset.key))
})
const volumeSamoeurn = (e) =>{
    audio.volume = e.target.value;
    
    // audio.volume = e.target.volue;// Passing the range slider value as an audio volume
}
const showHideKeys = () =>{ 
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) =>{
    playTune(e.key);
}
keyscheckbox.addEventListener("click",showHideKeys);
document.addEventListener("input",volumeSamoeurn);
document.addEventListener("keydown",pressedKey);