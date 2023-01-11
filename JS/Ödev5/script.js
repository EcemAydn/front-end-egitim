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
        input.value = 0
        rec=0
    }if (oprtr == "minus"){
        rec = input.value
        input.value = 0
        operator = oprtr

    }if (oprtr == "plus"){
        rec = input.value
        input.value = 0
        operator = oprtr        
    }if (oprtr == "divide"){
        rec = input.value
        input.value = 0
        operator = oprtr

    }if (oprtr == "multiply"){
        rec = input.value
        input.value = 0
        operator = oprtr

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
function onButtonClick(bg1){
    if (bg1=="btn1"){
    
        document.getElementById("container").style.backgroundColor= ""
        document.getElementsByClassName("header-name")[0].style.color="white"
        document.getElementById("text").style.backgroundColor = ""
        document.getElementsByClassName("buttons")[0].style.backgroundColor = ""
        document.getElementsByClassName("header-theme")[0].style.color=""
        document.getElementById("btn1").style.backgroundColor="orange"
        document.getElementById("btn2").style.backgroundColor="white"
        document.getElementById("btn3").style.backgroundColor="white"

    } else if (bg1=="btn2"){
        document.getElementById("container").style.backgroundColor="hsl(0, 0%, 90%)"
        document.getElementsByClassName("header-name")[0].style.color="black"
        document.getElementById("text").style.backgroundColor = "hsl(0, 5%, 81%)"
        document.getElementsByClassName("buttons")[0].style.backgroundColor = "hsl(0, 5%, 81%)"
        document.getElementsByClassName("header-theme")[0].style.color="black"
        document.getElementById("btn2").style.backgroundColor="orange"
        document.getElementById("btn1").style.backgroundColor="white"
        document.getElementById("btn3").style.backgroundColor="white"

    } else if (bg1=="btn3"){
        document.getElementById("container").style.backgroundColor="hsl(268, 75%, 9%)"
        document.getElementsByClassName("header-name")[0].style.color="yellow"
        document.getElementById("text").style.backgroundColor = "hsl(268, 71%, 12%)"
        document.getElementsByClassName("buttons")[0].style.backgroundColor = "hsl(268, 71%, 12%)"
        document.getElementsByClassName("header-theme")[0].style.color="yellow"
        document.getElementById("btn1").style.backgroundColor="white"
        document.getElementById("btn2").style.backgroundColor="white"
        document.getElementById("btn3").style.backgroundColor="aqua"

    }
}