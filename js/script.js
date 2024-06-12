
let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")
let inputFour = document.querySelector(".inputFour")

let btnOne = document.querySelector(".btnOne")
let btnTwo = document.querySelector(".btnTwo")
let btnThree = document.querySelector(".btnThree")
let btnFour = document.querySelector(".btnFour")

let errorOne = document.querySelector(".errorOne")
let errorTwo = document.querySelector(".errorTwo")
let errorThree = document.querySelector(".errorThree")
let errorFour = document.querySelector(".errorFour")

let boxOne =document.querySelector(".boxOne")
let boxTwo =document.querySelector(".boxTwo")
let boxThree =document.querySelector(".boxThree")
let boxFour =document.querySelector(".boxFour")
let boxFive = document.querySelector(".boxFive")

let plOne = document.querySelector(".plOne")
let plTwo = document.querySelector(".plTwo")

let child = document.querySelector(".child")
let bidNumber=document.querySelector(".bidNumber")

let life = document.querySelector(".life")
let chance = 3

btnOne.addEventListener("click",function(){
    if(inputOne.value==""){
        errorOne.innerHTML="Please enter your name"
    }
    else{
        errorOne.innerHTML=""
        boxOne.style.display= "none"
        boxTwo.style.display="block"
        plOne.innerHTML=inputOne.value
    }
})

btnTwo.addEventListener("click",function(){
    if(inputTwo.value==""){
        errorTwo.innerHTML="Please enter a number 0 to 9"
    }else if(isNaN(inputTwo.value)){
        errorTwo.innerHTML="Please enter a number 0 to 9"
    }else if(inputTwo.value>=0 && inputTwo.value<=9){
        errorTwo.innerHTML=""
        boxTwo.style.display="none"
        boxThree.style.display="block"
    }else{
        errorTwo.innerHTML="Please enter a number 0 to 9"
    }
})

btnThree.addEventListener("click",function(){
    if(inputThree.value==""){
        errorThree.innerHTML="Please enter your name"
    }else{
        errorThree.innerHTML=""
        boxThree.style.display="none"
        boxFour.style.display="block"
        plTwo.innerHTML=inputThree.value
    }
})

btnFour.addEventListener("click",function(){
    if(inputFour.value==""){
        errorFour.innerHTML="Please chack a number 0 to 9"
    }else if(isNaN(inputFour.value)){
        errorFour.innerHTML="Please chack a number 0 to 9"
    }else{
        errorFour.innerHTML=""
        if(inputTwo.value==inputFour.value){
            plTwo.innerHTML=`${inputThree.value} is Winner`
            child.style.display="none"
            boxFive.style.display="block"
        }else{
            chance--
            life.innerHTML=`Life - ${chance}`
            if(chance==0){
                plTwo.innerHTML=`${inputOne.value} is Winner`
                child.style.display="none"
                boxFive.style.display="block"
                bidNumber.innerHTML= `${inputOne.value} Bid number ${inputTwo.value}`
            }
        }
    }
})