const animationUp = document.querySelectorAll('.animation-up');
window.addEventListener('scroll', () => {
    let windowCenter = window.innerHeight * 0.75;
    animationUp.forEach(el => {
        let position = el.getBoundingClientRect().top - windowCenter;
        if (position <= 0) {
            el.classList.add('animation-up-end');
        };
    });
});
const companyItems = document.querySelectorAll('.company__item');
companyItems.forEach(el => {
    el.addEventListener('click', () => {
        let elLink = el.querySelector('a');
        window.open(elLink.href, '_blank');
    })
})