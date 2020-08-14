
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
    let time=new Date();
    if(msg.value!=""){
        event.preventDefault();
        let paraEl=document.createElement("p");
        let btnDel=document.createElement("button");
        let hr=document.createElement("hr");
        let br=document.createElement("br");
        let cont=document.createElement("div");
        let timeSpace=document.createElement("p");
        paraEl.className="para";
        btnDel.className="del";
        btnDel.innerHTML="delete";
        timeSpace.innerText="zubeda khanum @zubedauk:"+time.getSeconds()+" seconds ago";
        paraEl.innerHTML=msg.value;
        paraEl.appendChild(btnDel);
        cont.appendChild(timeSpace);
        cont.appendChild(paraEl);
       // cont.appendChild(btnDel);
        cont.appendChild(hr);
       tweet.appendChild(cont);
       // tweet.appendChild(hr);
        
    
    btnDel.addEventListener("click",function(e){
       // btnDel.parentNode.remove();
        btnDel.parentElement.parentElement.remove();
        hr.remove();
       
 })}

    wordCount=0;
    words.textContent=0;
    msg.value="";
})
 
msg.addEventListener("keyup",function(e){
        console.log(e.keyCode);
        arrTweet=msg.value.split(" ");

        words.textContent=msg.value.length;
        if(e.keyCode==8){
            arrTweet=msg.value.split(" ");
            console.log(arrTweet);
        }
        
        if(msg.value.length>280){
            msg.style.backgroundColor="red";
        }
        else{
            msg.style.backgroundColor="white";
        }
        
    
 });