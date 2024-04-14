//btn like
let heart= document.getElementsByClassName("like");
for(let i=0;i<heart.length;i++){
    let oneheart=heart[i];
    oneheart.addEventListener("click", function() {
        if(oneheart.firstChild.style.color =="black"){
       oneheart.firstChild.style.color="red";
          }
        else{
        oneheart.firstChild.style.color="black";
     }    
    })
}