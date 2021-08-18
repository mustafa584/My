const toogle = document.querySelector('.togle')
const navigation = document.querySelector('.navigation')
toogle.addEventListener('click', function () {
    toogle.classList.toggle('active')
    navigation.classList.toggle('active')
})

const items = document.querySelectorAll('.item')
for(var i = 0; i < items.length; ++i){
    let item = items[i]
        item.addEventListener('click',function(){
        item.classList.toggle('active')
    })
}




        
