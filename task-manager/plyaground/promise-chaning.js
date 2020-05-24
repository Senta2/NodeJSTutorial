require('../src/db/mongose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//5eaea8ae8bdbff3f54fa5f3d

/*User.findByIdAndUpdate('5eaea8ae8bdbff3f54fa5f3d', {age: 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age : 1})
}).then((result)=>
{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})*/
console.log('??')
Task.findByIdAndDelete('5eac92ab4a80c115c4703d2e').then((task)=>{
    console.log(task)
    return User.countDocuments({completed : true})
}).then((result)=>
{
    console.log(result)
}).catch((e)=>
{
    console.log(e)
})
