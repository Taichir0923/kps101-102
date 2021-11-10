// event listener
// onclick
const c4white = document.querySelector('#c4');
const noteC4 = document.querySelector('#noteC4');

document.addEventListener("keydown", function(e){
    if(e.keyCode === 90){
        c4white.classList.add('bg-gray-300')
        noteC4.play()
    }

    console.log(e.keyCode)
})

document.addEventListener('keyup', function(e){
    if(e.keyCode === 90){
        c4white.classList.remove('bg-gray-300')
        noteC4.currentTime = 0;
    }
})