'use strict';


document.addEventListener('DOMContentLoaded', () => {
    
    function slider() {

        //Slider

        let slideIndex = 1; //задаем индекс слайду
        let offset = 0; //расположение текущего слайда


        const slides = document.querySelectorAll('.intro__slider__item'),// отдельные слайды 
            slider = document.querySelector('.intro__slider'), //Весь блок со слайдами
            prev = document.querySelector('.intro__prev'), // кнопка влево
            next = document.querySelector('.intro__next'), // кнопка вправо
            slidesWrapper = document.querySelector('.intro__slider__wrapper'),
            slidesField = document.querySelector('.intro__slider__inner'),
            width = window.getComputedStyle(slidesWrapper).width; // узнаем ширину
        

        slidesField.style.width = 100 * slides.length + '%'; // узнаем ширину польностью всех слайдов
        slidesField.style.display = 'flex'; // все в одну строку
        slidesField.style.transition = '0.5s all'; // плавный переход
        
        slidesWrapper.style.overflow = 'hidden'; // ограничиваем, чтобы видно было 100%, а не 400%

        slides.forEach(slide => {
            slide.style.width = width; //теперь мы точно уверенны что все слайды одинаковой ширины
        }); 

        slider.style.position = 'relative'; 

        const indicators = document.createElement('ol'), //Создаем эелемент на страницу
            dots = []; //Создаем массив

        indicators.classList.add('carousel-indicators');
        slider.append(indicators);

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('dot');
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }
        
        //replace (регулярное выражение), удаляет все НЕ ЧИСЛА  
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        
        //Для плавного перехода
        function slidesFieldTransform() {
                    slidesField.style.transform = `translateX(-${offset}px)`;
        }

        //При пролистывании делает не активные слайды менее прозрачными а активным непрозрачным
        function opacitySlides() {
            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = 1;
        }

        //кнопка вперед
        next.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 1)) { 
                offset = 0;////если наш offset будет равен всей ширине наших слайдов, то возвращаемся в начало
            } else {
                offset += deleteNotDigits(width); //добавляем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == slides.length) {
                slideIndex = 1; // возвращаемся в начало, если дойдет до конца
            } else {
                slideIndex++;
            }

            opacitySlides(); 
        });

        //кнопка назад
        // все так же как вперед, только наоборот
        prev.addEventListener('click', () => {
            if (offset == 0) {  
                offset = deleteNotDigits(width) * (slides.length - 1);
            } else {
                offset -= deleteNotDigits(width); //уменьшаем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == 1) {
                slideIndex = slides.length; // возвращаемся в конец, если дойдет до начала
            } else {
                slideIndex--;
            }

            opacitySlides(); 
        });
        
        //Работа с массивом
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to'); // узнаем порядок слайдов
                slideIndex = slideTo; // заменяем порядок слайдов индексом
                offset = deleteNotDigits(width) * (slideTo -1);

                slidesFieldTransform();

                opacitySlides(); 
            });
        });
    }

    slider();

    function sliderTwo() {

        //Slider

        let slideIndex = 1; //задаем индекс слайду
        let offset = 0; //расположение текущего слайда


        const slides = document.querySelectorAll('.info__slider__item'),// отдельные слайды 
            slider = document.querySelector('.info__slider'), //Весь блок со слайдами
            prev = document.querySelector('.info__prev'), // кнопка влево
            next = document.querySelector('.info__next'), // кнопка вправо
            slidesWrapper = document.querySelector('.info__slider__wrapper'),
            slidesField = document.querySelector('.info__slider__inner'),
            width = window.getComputedStyle(slidesWrapper).width; // узнаем ширину
        

        slidesField.style.width = 100 * slides.length + '%'; // узнаем ширину польностью всех слайдов
        slidesField.style.display = 'flex'; // все в одну строку
        slidesField.style.transition = '0.5s all'; // плавный переход
        
        slidesWrapper.style.overflow = 'hidden'; // ограничиваем, чтобы видно было 100%, а не 400%

        slides.forEach(slide => {
            slide.style.width = width; //теперь мы точно уверенны что все слайды одинаковой ширины
        }); 

        slider.style.position = 'relative'; 

        const indicators = document.createElement('ol'), //Создаем эелемент на страницу
            dots = []; //Создаем массив

        indicators.classList.add('carousel-indicators');
        slider.append(indicators);

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('dot');
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }
        
        //replace (регулярное выражение), удаляет все НЕ ЧИСЛА  
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        
        //Для плавного перехода
        function slidesFieldTransform() {
                    slidesField.style.transform = `translateX(-${offset}px)`;
        }

        //При пролистывании делает не активные слайды менее прозрачными а активным непрозрачным
        function opacitySlides() {
            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = 1;
        }

        //кнопка вперед
        next.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 1)) { 
                offset = 0;////если наш offset будет равен всей ширине наших слайдов, то возвращаемся в начало
            } else {
                offset += deleteNotDigits(width); //добавляем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == slides.length) {
                slideIndex = 1; // возвращаемся в начало, если дойдет до конца
            } else {
                slideIndex++;
            }

            opacitySlides(); 
        });

        //кнопка назад
        // все так же как вперед, только наоборот
        prev.addEventListener('click', () => {
            if (offset == 0) {  
                offset = deleteNotDigits(width) * (slides.length - 1);
            } else {
                offset -= deleteNotDigits(width); //уменьшаем смещение, если не последний слайд
            }

            slidesFieldTransform();

            if (slideIndex == 1) {
                slideIndex = slides.length; // возвращаемся в конец, если дойдет до начала
            } else {
                slideIndex--;
            }

            opacitySlides(); 
        });
        
        //Работа с массивом
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to'); // узнаем порядок слайдов
                slideIndex = slideTo; // заменяем порядок слайдов индексом
                offset = deleteNotDigits(width) * (slideTo -1);

                slidesFieldTransform();

                opacitySlides(); 
            });
        });
    }

    sliderTwo();

});
