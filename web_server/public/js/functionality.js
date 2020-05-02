console.log("print from js file")

/*fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})*/




const weatherForm = document.querySelector('form')
const ssearch = document.querySelector('input')
const mesg2 = document.querySelector('#msg2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = ssearch.value

    fetch('/weather?location='+location).then((response)=>{
    response.json().then((data)=>{
        //console.log(data)
        mesg2.textContent = 'Am primit locatia sau ceva'+data.location

    })
})


    console.log(location)
})