const container = document.querySelector("#MajorGodsButton")
console.log(container)
TestMyth.addEventListener("DOMContentLoaded",() =>{
    const button = document.querySelector(".button");
    const dropHolder = document.querySelector("#MajorGodsButton");

    button.addEventListener("click", ()=>{
        if (dropHolder.style.display === "block"){
            dropHolder.style.display = "none";
        } else {
            dropHolder.style.display = "block";
        }
    });
});