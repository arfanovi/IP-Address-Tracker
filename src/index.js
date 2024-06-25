

const searchInput = document.querySelector(".header_form");

searchInput.addEventListener('submit' , (event) =>{
    event.preventDefault()
    const value = document.querySelector("#search").value;
    console.log(value)
})



