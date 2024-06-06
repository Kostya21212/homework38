const btn = document.getElementById('btn');
btn.addEventListener('click', function(event){
    const img = document.createElement('img');
    img.setAttribute('src', '/images/sky.jpg');
    img.classList.add('first')
    if(event.target.classList.toggle('first')){
        document.body.appendChild(img)
    }else{
        img.setAttribute('src','/images/street.jpg')
    }
    ; // Припускаю, що ви хочете додати зображення до тіла документа

});

