//Get element from DOM and declare variables
const loader = document.getElementById('loader')
const btn = document.getElementById('btn')
const stop = document.getElementById('stop')

let timer = document.getElementById('timer')

let i = 10

function rotateCircle(){
   loader.style.transform = `rotate(${i}deg)`

    i += 20
    
    if(i >= 360){
        i = 0
    } 
    timer.textContent = `${i} degrees`
}

function stopCircle(){
   location.reload()
}

// Function to start the rotation of the Loaders at Intervals of 0.1secs
function startAnimation(){
    setInterval(rotateCircle, 100)
}

// Function to stop the rotation of the loaders by reloading the page
function stopAnimation(){
  stopCircle()
}

//Event Listeners for Load and Stop buttons
btn.addEventListener('click', startAnimation )
stop.addEventListener('click', stopAnimation )

