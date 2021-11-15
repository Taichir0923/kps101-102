const container = document.querySelector('.container #container');
const input = document.querySelector('input[type="text"]')
const btn = document.querySelector('input[type="button"]')

btn.addEventListener('click', function(){
    container.insertAdjacentHTML('afterbegin', `
        <div class="box">
            <img src=${input.value} alt="">
            <div id="delete" class="delete">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `)
    input.value = ''
})