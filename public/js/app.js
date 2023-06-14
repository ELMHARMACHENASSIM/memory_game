let spanClick = document.querySelector(".welcome span");
spanClick.addEventListener("click",()=>{
    let urName = prompt("whats ur name");
    console.log(urName);
    if ( urName == null || urName == ""  ) {
        let myName = document.querySelector(".name span");
        myName.innerHTML = "unknown";
       
    }
    else{
        let myName = document.querySelector(".name span");
        myName.innerHTML = urName;
    }
    document.querySelector(".welcome").remove();
})