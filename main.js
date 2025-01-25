const uploadbtn = document.querySelector(".icon-upload")
const container = document.getElementById("container")
const input = document.querySelector("input")
const angry= document.querySelector(".icon-angry2")

uploadbtn.addEventListener("click", (eo) => {
    //ghaltaa lena
    const p = `<div class="task">
    <span class="icon-star icon"> </span>
    <p class="task-text"> ${input.value} </p>

    <div>
      <span class="icon-trash icon"> </span>

      <span class="icon-angry2 icon"> </span>
    </div>

    <!-- <span class="icon-heart">   </span> -->
  </div>`
  console.log(input.value)
    container.innerHTML += p;
})

container.addEventListener("click", (eo) => {
    if (eo.target.classList == "icon-trash icon") {
        eo.target.parentElement.parentElement.remove()
    }
    //ghlta fl code eli louta
    else if(eo.target.classList == "icon-angry2"){
        const heart=`<span  class="icon-heart"> </span>`
        eo.target.classList.add("hidden")
        eo.target.parentElement.innerHTML=heart
    }
})

