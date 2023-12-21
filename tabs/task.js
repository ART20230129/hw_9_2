//создаем массив вкладок
let tabNavigation = document.querySelectorAll(".tab");
tabNavigation = Array.from(tabNavigation);

let tabContent  = document.querySelectorAll(".tab__content");


tabNavigation.forEach((item) => {    // перебор массива вкладок
        item.addEventListener("click", ()=> {  //обработчик нажатия на ссылку
                const tabActive = document.querySelector(".tab_active"); // определяем активную ссылку
                const tabContentActive = document.querySelector(".tab__content_active"); // определяем содержимое активнйо ссыльки

                tabActive.classList.remove("tab_active"); // "отключаем" активную сслыку
                tabContentActive.classList.remove("tab__content_active"); // "отключаем" содежимое активной ссылки

                item.classList.add("tab_active"); // подключаем к ссылке "активность"
                tabContent[tabNavigation.indexOf(item)].classList.add("tab__content_active"); 
                // строкой выше в tabContent с индексом активной ссылки подключаем содержимое к активной ссылке

        })
})
/*
// более "примитивный" механизм переключения ссылок 
tabNavigation.forEach((item, index) => {    // перебор массива вкладок
        item.addEventListener("click", ()=> {  //обработчик нажатия на ссылку
                const tabActive = document.querySelector(".tab_active"); // определяем активную ссылку
                const tabContentActive = document.querySelector(".tab__content_active"); // определяем содержимое активнйо ссыльки

                tabActive.classList.remove("tab_active"); // "отключаем" активную сслыку
                tabContentActive.classList.remove("tab__content_active"); // "отключаем" содежимое активной ссылки

                item.classList.add("tab_active"); // подключаем к ссылке "активность"
                tabContent[index].classList.add("tab__content_active"); 
                // строкой выше в tabContent с индексом активной ссылки подключаем содержимое к активной ссылке
        })
})
*/
