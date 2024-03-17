const $ = document


window.addEventListener("click", (ev) =>{
    // console.log(ev.offsetX);
    // console.log(ev.offsetY);
    let domAppend = `
        <span>
            <img class="snowflake" 
                src="assets/snowflake-image.svg" 
                alt="snow"
                style="width: ">
        </span>
    `
    // console.log(Math.random() * 1000);
    console.log(randomlyWidth(100, 500));
})

function randomlyWidth(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
  