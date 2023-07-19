let result=document.getElementById('inputbox');
function calculate(number){
    result.value+=number;
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}

function Result(){
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid input")
    }
}