const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const slidesCounter = sliderRight.querySelectorAll('div').length;
const dwnBtn = document.querySelector('.dwn-btn');
const upBtn = document.querySelector('.up-btn');

// Стартовое значение переменной для активного слайда
let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slidesCounter -1)*100}vh`;

upBtn.addEventListener('click', function () {
    nextSlide('up');
});

dwnBtn.addEventListener('click', function () {
    nextSlide('down');
});

function updateButtons() {
    if (activeSlideIndex === 0) {
        upBtn.style.backgroundColor = 'rgb(13, 237, 103)';
        upBtn.style.color = 'white';
        upBtn.style.display = 'block'
        dwnBtn.style.display = 'none'; // Показываем кнопку на всех слайдах, кроме последнего
    } else if (activeSlideIndex === 1) {
        upBtn.style.backgroundColor = 'rgb(237, 192, 13)';
        upBtn.style.color = 'white';
        dwnBtn.style.backgroundColor = 'rgb(237, 192, 13)';
        dwnBtn.style.color = 'white';
        upBtn.style.display = 'block'
        dwnBtn.style.display = 'block'; // Показываем кнопку на всех слайдах, кроме последнего
    } else if (activeSlideIndex === 2) {
        upBtn.style.backgroundColor = 'rgb(215, 43, 23)';
        upBtn.style.color = 'white';
        dwnBtn.style.backgroundColor = 'rgb(215, 43, 23)';
        dwnBtn.style.color = 'white';
        upBtn.style.display = 'block'
        dwnBtn.style.display = 'block'; // Показываем кнопку на всех слайдах, кроме последнего
    } else if (activeSlideIndex === slidesCounter - 1) {
        dwnBtn.style.backgroundColor = 'rgb(76, 76, 215)';
        dwnBtn.style.color = 'white';
        dwnBtn.style.display = 'block';
        upBtn.style.display = 'none' // Скрываем кнопку только на последнем слайде
    } else {
        upBtn.style.backgroundColor = 'black';
        upBtn.style.color = 'white';
        dwnBtn.style.display = 'block';
        upBtn.style.display = 'block' // Показываем кнопку на всех слайдах, кроме последнего
    }
}

function nextSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCounter) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCounter - 1;
        }
    }

    const height = slider.clientHeight;

    sliderLeft.style.transform = `translateY(${activeSlideIndex * height}px)`;
    sliderRight.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    updateButtons();
}

// Инициализация кнопок
updateButtons();
