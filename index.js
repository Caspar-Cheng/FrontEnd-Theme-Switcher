const Switch = document.querySelector(".round");
const body = document.body;
const getTheme = localStorage.getItem('theme') ? localStorage.getItem('theme'):null;

function SwitchTheme(){
    if (Switch.classList.toggle('active')){
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }

}


if (getTheme !== null){
    body.className = getTheme;
    body.className.contains('dark-theme') ? Switch.classList.add('active') : Switch.classList.remove('active')
}