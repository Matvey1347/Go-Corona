const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');
burger.addEventListener('click', function (event) {
    burger.classList.toggle('_active');
    navigation.classList.toggle('_active');
    body.classList.toggle('lock');
});
// Анимация при скролле
const animitems = document.querySelectorAll('._anim-items');
if (animitems.length > 0) {
    window.addEventListener('scroll', animOneScroll);
    function animOneScroll() {
        for (let index = 0; index < animitems.length; index++) {
            const animItem = animitems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }


            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
// У эл с этим класом анимация будет повторятся только один раз
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOneScroll();
    }, 300)
}