const hamBurger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamBurger.addEventListener('click',() => {
    ul.classList.toggle('ham-active');

    let ham_child = hamBurger.firstElementChild;

    if (ul.classList.contains('ham-active')){

        ham_child.classList.replace('fa-bars','fa-xmark');
    }
    else{
        ham_child.classList.replace('fa-xmark','fa-bars');

    }

});