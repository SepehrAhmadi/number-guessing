let input = document.getElementById("input");
let btn = document.getElementById("btn");
let message = document.getElementById("message");

let min = 50;
let max = 100;
let answer = Math.floor(Math.random() * (max - min)) + min
 
let attempts = 0;
let guess; 

    btn.onclick = function () { 
        guess = input.value;
        guess = Number(guess)

        console.log(guess)
            if(isNaN(guess)){
                message.textContent = "Please Enter valid Number"
                input.value = ''
            }
            else if(guess < min || guess > max){
                message.textContent = "Please Enter valid Number"
                input.value = ''
            }
            else{
                attempts++
                if(guess < answer){
                    message.textContent = "too LOW"
                    input.value = ''
                }
                else if (guess > answer){
                    message.textContent = "too HIGH"
                    input.value = ''
                }
                else{
                    message.textContent = `CORRECT answer is ${answer} , it took you ${attempts}`
                }
            }
        }
