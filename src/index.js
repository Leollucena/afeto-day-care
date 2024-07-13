/*function scrollar(event){
    event.preventDefault();

const target =this.getAttribut('href').substring(1);
const targetSection =document.getElementById(target);

targetSection.scrollIntoView({ behavior: 'smooth' });
}

const LinkDeTrabalho = document.querySelector('a[href="#trabalho"]');
const LinkDeLocation = document.querySelector('a[href="#location"]');
const LinkDeFooter = document.querySelector('a[href="#footer"]');

LinkDeTrabalho.addEventListener('click',scrollar);
LinkDeLocation.addEventListener('click',scrollar);
LinkDeFooter.addEventListener('click',scrollar);*/

document.addEventListener('DOMContentLoaded', function() {
    const afetoLink = document.querySelector('.header .logo');

    afetoLink.addEventListener('click', function(event) {
        event.preventDefault();

        const footer = document.querySelector('.footer');

        footer.scrollIntoView({ behavior: 'smooth' });
    });
});



