let keys = document.querySelectorAll(".key");
let display_input = document.querySelector(".input");
const display_output = document.querySelector(".output");

let input = "";
for(let key of keys){
    key.addEventListener('click',(e)=>{
        if(e.target.innerText=="AC"){
            display_input.innerText = "";
        }

        else if(e.target.innerText=="="){
            let result = eval(display_input.innerText);
            display_input.innerText="";
            display_input.innerText +=result;
        }

        else if(e.target.innerText == "Clear"){
            input = display_input.innerText;
            display_input.innerText = "";
            display_input.innerText += (input.slice(0,-1));
        }
        else{
            display_input.innerText += e.target.innerText;
        }
        
    })
}
