let operator = ""
let input = document.querySelector('#text')
let rec = ""
let button = document.querySelector("#btn")
let color = document.querySelector("#container")

function onNumberClick(num){
    if(input.value=="0"){
        input.value=null
    } 
    input.value += num
   // input.value=parseFloat(input.value)     
}

function onOperatorClick(oprtr){

    if(oprtr == "delete"){
        input.value = input.value.slice(0, input.value.length -1)
        if(input.value ==""){
            input.value=0
        }
    }if(oprtr == "reset"){
        input.value = 0;
        rec=0;
    }if (oprtr == "minus"){
        rec = input.value;
        input.value = 0;
        operator = oprtr;
    }if (oprtr == "plus"){
        rec = input.value;
        input.value = 0;
        operator = oprtr;        
    }if (oprtr == "divide"){
        rec = input.value;
        input.value = 0;
        operator = oprtr;
    }if (oprtr == "multiply"){
        rec = input.value;
        input.value = 0;
        operator = oprtr;

    }if(oprtr == "equal"){
        switch(operator){
            case 'minus':
                input.value = rec - input.value
                break;
            case 'plus':
                input.value = Number(rec) + Number(input.value)
                break;
            case 'divide':
                input.value = rec / input.value
                break;
            case 'multiply':
                input.value = rec * input.value
                break;
            
        }
    }

}
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let theme1 = document.querySelector('.theme');
btn1.style.backgroundColor = 'orange'


function onButtonClick(theme){

    if(theme == 'theme1') {

        btn1.style.backgroundColor = 'orange'
        btn2.style.backgroundColor = 'rgb(221, 216, 216)'
        btn3.style.backgroundColor = 'rgb(221, 216, 216)'
        theme1.classList.remove('theme2')
        theme1.classList.remove('theme3')


    } else if(theme == 'theme2') {

        theme1.classList.add('theme2');
        theme1.classList.remove('theme3')
        btn1.style.backgroundColor = 'rgb(221, 216, 216)'
        btn2.style.backgroundColor = 'orange'
        btn3.style.backgroundColor = 'rgb(221, 216, 216)'

    } else if(theme == 'theme3') {
        theme1.classList.add('theme3');
        btn1.style.backgroundColor = 'rgb(221, 216, 216)'
        btn2.style.backgroundColor = 'rgb(221, 216, 216)'
        btn3.style.backgroundColor = 'orange'
    }


}
