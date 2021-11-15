const container = document.querySelector('.container #container');
const input = document.querySelector('input[type="text"]')
const btn = document.querySelector('input[type="button"]')
const backdrop = document.querySelector('.backdrop');

const images = [];

btn.addEventListener('click', function(){
    images.push(input.value)
    updateUI()
})

function updateUI(){
    container.innerHTML = '';
    images.forEach(function(img , index){
        container.insertAdjacentHTML('beforeend', `
            <div id="zurag-${index}" class="box">
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
        const deleteIndex = +e.target.parentNode.parentNode.id.split('-')[1];
        images.splice(deleteIndex, 1)
        updateUI()
    }
    if(e.target.classList.contains('box')){
        const openIndec = +e.target.id.split('-')[1];
        backdrop.classList.add('open')
    }
})