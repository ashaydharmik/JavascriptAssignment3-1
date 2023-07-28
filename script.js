//  Assignment 1 
 
 function getRandomColor(){
    let code = "#" + Math.random().toString(16).substring(2,8)  
    return code
}
function changeBackgroundColor(){
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}


