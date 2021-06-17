var head =document.getElementById("head");
var tail=document.getElementById("tail");
var you =document.getElementById("you");
var computer =document.getElementById("computer");
var count =0;
var computer_count=0;
var your_choice;
var number =Math.random();
console.log(number);

if(number>0.5){
     var result=1;
  console.log(result)
}else{
    var result =2;
  console.log(result);
}

function moto(){

    var number =Math.random();
    console.log(number);

    if(number>0.5){
     var result=1;
             console.log(result)
    }else{
            var result =2;
             console.log(result);
}
    if(result==your_choice){
       
         count++;
        you.innerHTML=count;
        computer.innerHTML=computer_count;

      
        if(count==5){
            alert("you win");
            
            location.reload();
        }
        
         console.log(count+"you");
         console.log(computer_count+"computer");
         console.log("you win");
    }
    else
    {
       
        computer_count++;
        you.innerHTML=count;
        computer.innerHTML=computer_count;
        
       
       
        if(computer_count==5){
            alert("computer win");
          
            location.reload();
            
            
        }       
        console.log("you loss");
    }
}
head.addEventListener("click",function(){
  
    your_choice=1
    console.log(your_choice);
    moto();
})
tail.addEventListener("click",function(){
    your_choice=2
    console.log(your_choice);
    moto();
    
    
})




