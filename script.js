document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.background = `conic-gradient(#05998c ${percentage}%, #4fb9af ${percentage}%)`;
        
    });
});

function project1(){
    window.location.href="https://rasha110.github.io/CODSOFT-To-do-List/";
}
function project2(){
    window.location.href="https://rasha110.github.io/CODSOFT-DigitalClock/";
}
function project3(){
    window.location.href="https://rasha110.github.io/Grocery-List/";
}
function project4(){
    window.location.href="https://rasha110.github.io/Password-Generator/";
}
function downloadCV(){
   window.location.href="https://www.canva.com/design/DAGLeiCoLEA/-ah6TYaezrZ_u65dzwH5pw/view?utm_content=DAGLeiCoLEA&utm_campaign=designshare&utm_medium=link&utm_source=editor";
}
