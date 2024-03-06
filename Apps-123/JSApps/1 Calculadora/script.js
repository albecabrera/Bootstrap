const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.onclick = () => {
if(item.id=="clear"){
    display.innerText = "";     
}else if(item.id=="backspace"){
let string = display.innerText.toString();
display.innerText=string.substr(0,string.lenght-1);
//45

} else if(display.innertext !=""&& item.id=="equal"){
    display.innerText = eval(display.innerText);
}
    }
})
