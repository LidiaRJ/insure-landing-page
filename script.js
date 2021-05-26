document.querySelectorAll('.burger__menu').forEach(button => {
    button.addEventListener('click', () => {
        const navContent =  button.nextElementSibling;

        button.classList.toggle('burger__menu--active');

        if(button.classList.contains('burger__menu--active')) {
            navContent.getElementsByClassName.maxHeight = navContent.scrollHeight + 'px';
        } else {
            navContent.getElementsByClassName.maxHeight = 0;
        }
    })
})