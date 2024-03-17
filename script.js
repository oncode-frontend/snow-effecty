const $ = document


$.addEventListener("click", (ev) =>{
    
    let snowSpan = document.createElement('span')
    snowSpan.classList.add('snowflake')

    snowSpan.style.left = ev.clientX + 'px'
    snowSpan.style.top = ev.clientY + 'px'

    snowSpan.style.width = randomlyWidth(100, 300) + 'px'
    snowSpan.style.height = randomlyWidth(100, 300) + 'px'

    $.body.appendChild(snowSpan)
    setTimeout(() => {
        snowSpan.remove()
    }, 2000);
})

function randomlyWidth(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
  