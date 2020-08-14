
let btnSubmit=document.getElementById("btnSubmit");
let msg=document.getElementById("msg");   
let tweet=document.getElementById("tweet");
let words=document.getElementById("words");
let arrTweet;
let count=1;
let limitMsg;
let wordCount=0;
let firstWord=false;
btnSubmit.addEventListener("click",function(event){
    if(msg.value!=""){
        event.preventDefault();
        let paraEl=document.createElement("p");
        let btnDel=document.createElement("button");
        paraEl.className="para";
        btnDel.className="del";
        btnDel.innerHTML="delete";
        paraEl.textContent=msg.value;
        paraEl.appendChild(btnDel);
        tweet.appendChild(paraEl);
      
    
    btnDel.addEventListener("click",function(e){
        btnDel.parentNode.remove();
       
 })}

    wordCount=0;
    words.textContent=0;
    msg.value="";
})
 
msg.addEventListener("keyup",function(e){
    arrTweet=msg.value.split(" ");
    words.textContent=arrTweet.length;
    words.textContent=arrTweet.length;
    if(e.keyCode==8){
        arrTweet=msg.value.split(" ");
        console.log(arrTweet);
    }
    if(arrTweet.length>10){
        msg.style.backgroundColor="red";
    }
    else{
        msg.style.backgroundColor="white";
    }
    
 });