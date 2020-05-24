require('../src/db/mongose')
const User = require('../src/models/user')
/*
const add = (a,b) =>{
return new Promise((resolve, reject)=>{
    if(a<0 || b< 0)
    {
        return reject('Numbers must be > 0')
    }
    setTimeout(()=>{
        resolve(a + b)
    }, 2000)
})
}


const doWork = async () => 
{
    //return 'Andrew'
    //throw new Error('something went wrong')
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum
}


doWork().then((result)=>{
    console.log('Result ', result)
}).catch((err)=>{
    console.log('Error: ', err)
})*/

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5eaea8ae8bdbff3f54fa5f3d', 2).then((count) => {
    console.log(count)
}).catch((e)=>{
    console.log(e)
})