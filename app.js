let cast_button= document.getElementById("The-Cast");
let story_button= document.getElementById("Stories");
let music_button= document.getElementById("Music");
let about_button= document.getElementById("About");
let store_button= document.getElementById("Store");
function rgb(num) {
    return Math.floor(Math.random() * num);
  }
  
  
  let colorChange = function (event) {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
  }
cast_button.onclick=colorChange;
story_button.onclick=colorChange;
music_button.onclick=colorChange;
about_button.onclick=colorChange;
store_button.onclick=colorChange;