TestMyth.addEventListener("DOMContentLoaded",() =>{
    const button = TestMyth.querySelector(".button");
    const dropHolder = TestMyth.querySelector(".dropHolder");

    button.addEventListener("click", ()=>{
        if (dropHolder.style.display === "block"){
            dropHolder.style.display = "none";
        } else {
            dropHolder.style.display = "block";
        }
    });
});