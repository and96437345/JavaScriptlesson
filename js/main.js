document.addEventListener('DOMContentLoaded', () => {
    let switchButtons = document.querySelectorAll('.swicth__item');
    console.log(switchButtons);
    switchButtons.forEach(switchButton => {
        switchButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(switchButton.dataset.value);
            setEvent(switchButton.dataset.value);
        })
    })

    function setEvent(curEvent) {
        switchButtons.forEach(switchButton => {
            switchButton.classList.remove('swicth__item--js-active');
        })
        let tabContents = document.querySelectorAll(".content");
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('js-active');
        })
        let switchButtonActive = document.querySelector(`[data-value='${curEvent}']`);
        console.log(switchButtonActive)
        switchButtonActive.classList.add('swicth__item--js-active');

        let tabContentActive = document.querySelector(`[data-event='${curEvent}']`);
        console.log(tabContentActive)
        tabContentActive.classList.add('js-active');
    }

    var swiper = new Swiper(".photos__slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: 'photos__arrow--right',
            prevEl: 'photos__arrow--left',
        }
      });
})
