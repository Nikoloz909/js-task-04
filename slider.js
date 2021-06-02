let sliderContainer = document.querySelector('.sliderContainer')
let slideButton = document.querySelectorAll('.navigation')
let currentSlide = 0
fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/slides')
.then(response => response.json())
.then(data => {
    // <div class="slides" style="background: green;">slide 1</div>
    data.forEach(item =>{
        let div = document.createElement('div')
        div.innerText = item.title
        div.style.background = 'url('+ item.image +') center center no-repeat'
        sliderContainer.appendChild(div)
        div.className = 'slides'
    })
    sliderContainer.style.width = (data.length * 500) + 'px'
})

// const slides = 
slideButton.forEach(button=>{
    button.addEventListener('click',(event)=>{
        if(event.target.classList.contains('navigation-prev')){
            currentSlide -= 1
            if(currentSlide < 0){
                currentSlide = 0
            }
        }else{
            currentSlide += 1
           if(currentSlide > 2){
               currentSlide = 2
           }
        }
        sliderContainer.style.left = '-' + (currentSlide * 500) + 'px'
    })
})