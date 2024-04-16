var buttonLength = document.querySelectorAll('.drum').length;

for (var i = 0; i < buttonLength; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
      var value = this.innerHTML;
      playAudio(value);
    })
}


document.addEventListener('keydown',function(event){
  playAudio(event.key);
})
function playAudio(value){
  switch (value){
    case 'w': 
    var tom = new Audio("sounds/tom-1.mp3");
    tom.play();
    break;
    case 'a':
    var tom = new Audio("sounds/tom-2.mp3");
    tom.play();
    break;
    case 's':
    var tom = new Audio("sounds/tom-3.mp3");
    tom.play();
    break;
    case 'd':
    var tom = new Audio("sounds/tom-4.mp3");
    tom.play();
    break;
    case 'j':
    var tom = new Audio("sounds/crash.mp3");
    tom.play();
    break;
    case 'k':
    var tom = new Audio("sounds/kick-bass.mp3");
    tom.play();
    break;
    case 'l':
    var tom = new Audio("sounds/snare.mp3");
    tom.play();
    break;
    default:
        console.log(value);
  } 
}