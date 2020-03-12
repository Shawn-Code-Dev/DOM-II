// Your code goes here
const nav = document.querySelector('nav')
//1
nav.addEventListener("mouseover", function (event) {

    // highlight the mouseover target
    event.target.style.color = "crimson";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// Prevents links from posting/refreshing?
nav.addEventListener("click", function (event) {
    event.preventDefault();
}, false);

const header = document.querySelector('h1')

//2

header.addEventListener('mouseenter', (event) => {
    event.target.style.color = "crimson";
}, false);

//3

header.addEventListener('mouseout', (event) => {
    event.target.style.color = "";
    event.target.style.textDecoration = '';
}, false);

//4

header.addEventListener('click', (event) => {
    event.target.style.color = "cyan";
    event.target.style.textDecoration = 'underline';
}, false);

//5

window.addEventListener('load', (event) => {
    alert('All assets loaded');
});

//6

nav.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    setTimeout(function () {
        event.target.style.background = "";
    }, 500);
}, true);

//7

const bus = document.querySelector('#busboi')

bus.addEventListener('dblclick', (event) => {
    event.target.style.display = "none";
    setTimeout(function () {
        event.target.style.display = "";
    }, 500);
});

//8

const content = document.querySelectorAll('.text-content')

content.forEach(p => {
    p.addEventListener('mousemove', (event) => {
        event.target.style.background = "skyblue";
        setTimeout(function () {
            event.target.style.background = "";
        }, 500)
})});

//9

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.btn');
  el.onwheel = zoom;

  //10 

  const footer = document.querySelector('footer')

  footer.addEventListener('contextmenu', e => {
    e.preventDefault();
  });