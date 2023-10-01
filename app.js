const checkbox = document.getElementById('cbox');
const video = document.getElementById('video');
const preloader = document.querySelector('.preloader');

let check = true;

window.addEventListener('DOMContentLoaded', () => {
    checkbox.checked = true;

    return check = checkbox.checked;
});

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})

const checker = () => {
    check = !check;

    checkbox.checked = check;

    if(check) {
        video.play();
    } else {
        video.pause();
    }
};

checkbox.addEventListener('click', checker);

