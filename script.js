const btn = document.querySelector('.btn');
const iconFirst = document.querySelector('.btn__icon-first');
const iconSecond = document.querySelector('.btn__icon-second');

btn.addEventListener('click', () =>{
    if(iconFirst.style.display == 'block'){
        iconFirst.style.display = "none";
        iconSecond.style.display = "block";
        btn.style.backgroundColor = '#9FE2BF';
    }
    else {
        iconFirst.style.display = "block";
        iconSecond.style.display = "none";
        btn.style.backgroundColor = '#FCB4D5';
    }
})