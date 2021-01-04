
    var cards = document.querySelectorAll(".items");
    var btn = document.querySelectorAll('.filter button');
     
    btn.forEach(buttons =>{

        buttons.addEventListener("click",e => {
            var tag = e.target.value;
console.log(tag)
            cards.forEach(item => {
                if(tag == "all"){
                    item.style.display = "block"
                }else if(item.classList.contains(tag)){
                    item.style.display ="block";
                }else{
                    item.style.display ="none";
                }
            }
              
            );
            

            }
        )
    }
       
    )


    const searchBox = document.querySelector("input");
     
    searchBox.addEventListener("keyup",  search => {
       filter = search.target.value.toLowerCase().trim();
       cards.forEach(c =>{
        if(c.textContent.includes(filter)){
            c.style.display = "block";
        }else{
            c.style.display = "none";
  
        }
       })
   
    })