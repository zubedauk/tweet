
let btnSubmit=document.getElementById("btnSubmit");
let msg=document.getElementById("msg");   
let tweet=document.getElementById("tweet");
let words=document.getElementById("words");
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
    ////////delete element when click on delete button
    btnDel.addEventListener("click",function(e){
        btnDel.parentNode.remove();
       
 })}

    wordCount=0;
    words.textContent=0;
    msg.value="";
})
 
msg.addEventListener("keyup",function(e){
    if(wordCount<=5){
 
        if(e.keyCode===32 && msg.value.charAt(msg.value.length-2)!=" " && msg.value.length>1){ 
                wordCount++;
                words.textContent=wordCount;
            }
        //increase no of words after .
        if(e.keyCode===190 && msg.value.charAt(msg.value.length-2)!=" " && msg.value.length>1){ 
            wordCount++;
        //   alert("okk");
            words.textContent=wordCount;
        }
        //remove words with backspace and discount no of words
    if(e.keyCode===8 && msg.value.charAt(msg.value.length-1)===" "){
    // console.log(msg.value.charAt(msg.value.length-1));
        wordCount--;
        words.textContent=wordCount;
        console.log(msg.value.length);
    }
    // remove the last word from text area
    if(e.keyCode===8 && msg.value.length===0){
    console.log("zero");
        //wordCount--;
        words.textContent=0;
        wordCount=0;
        
        }
        limitMsg=msg.value;
    }else{
        
        msg.style.backgroundColor="red";
        msg.value=limitMsg;

        words.textContent=wordCount;
           //remove words with backspace and discount no of words
    if(e.keyCode===8 && msg.value.charAt(msg.value.length-1)===" "){
        // console.log(msg.value.charAt(msg.value.length-1));
          
            msg.style.backgroundColor="white";

            words.textContent=wordCount;
            wordCount--;
        }
        // remove the last word from text area
        if(e.keyCode===8 && msg.value.length===0){
        console.log("zero");
            //wordCount--;
            words.textContent=0;
            wordCount=0;
            msg.style.backgroundColor="white";
            } 
    }
});
 msg.addEventListener("keydown",function(e){
   
    // if(e.keyCode===8 && msg.value.charAt(msg.value.length-2)!=" "){ 
    //     wordCount--;
    // }

    
 });