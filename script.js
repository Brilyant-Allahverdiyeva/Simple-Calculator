function add(a,b){
 return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
   if(b!=0) {
       return a/b;
    }
   else{
       alert('You can\'t divide by zero!!');
       result.clear();
   } 

}

document.querySelector('.btn').addEventListener('click',function(){
    var number1=parseInt(document.getElementById('number1').value);
    var number2=parseInt(document.getElementById('number2').value);
    var select=document.getElementById('select').value;
    var result;
    if(select=='add'){
       result=add(number1,number2);
    }
    else if(select=='subtract'){
        result=subtract(number1,number2);
    }
    else if(select=='multiply'){
        result=multiply(number1,number2);
    }
    else if( select=='divide'){
        result=divide(number1,number2);
    }
    else{
        alert('Please choose option');
        result.clear();
    }
    document.getElementById('result').innerText=result;
    
    
})