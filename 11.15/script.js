const container = document.querySelector('.container #container');
const input = document.querySelector('input[type="text"]')
const btn = document.querySelector('input[type="button"]')

const images = [];

btn.addEventListener('click', function(){
    images.push(input.value)
    updateUI()
})

function updateUI(){
    container.innerHTML = '';
    images.forEach(function(img){
        container.insertAdjacentHTML('afterbegin', `
            <div class="box">
                <img src=${img} alt="">
                <div class="delete">
                    <i id="delete" class="fas fa-times"></i>
                </div>
            </div>
        `)
    })
    input.value = ''
}

document.addEventListener('click', function(e){
    if(e.target.id === "delete"){
        e.target.parentNode.parentNode.remove()
    }
})