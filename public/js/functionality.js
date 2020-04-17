console.log("print from js file")

/*fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})*/




const weatherForm = document.querySelector('form')
const ssearch = document.querySelector('input')
const msg2 = document.querySelector('#msg2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = ssearch.value

    fetch('http://127.0.0.1:3000/weather?location='+location).then((response)=>{
    response.json().then((data)=>{
        //console.log(data)
        msg2.textContent = 'Am primit locatia sau ceva'+data.location

    })
})


    console.log(location)
})