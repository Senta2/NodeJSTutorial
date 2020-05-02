/*const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const ObjectID = mongo.ObjectID*/

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-mnager'

const id = new ObjectId()
//console.log(id.id.length)
//console.log(id.toHexString(0))
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {
    useNewUrlParser: true }, (error, client)=>{
        if(error){
            return console.log('unable to connect')
        }
        console.log('Connected correctly!')
        const db = client.db(databaseName)

       /* const updatePromise = db.collection('Users').updateOne({_id: new ObjectId('5eac910d5c7ec031fc69a57e')
        },{
            $set: {
                name: 'Jennifer'
            }
        })
        updatePromise.then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })*/
        /*db.collection('Users').updateOne({_id: new ObjectId('5eac910d5c7ec031fc69a57e')
        },{
            $set: {
                name: 'Jennifer'
            }
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })*/

        db.collection('Tasks').updateMany({completed: false},{
            $set: {
                completed: true
            }
        }).then((result)=>{
            console.log(result.modifiedCount)
        }).catch((error)=>{
            console.log(error)
        })
        
        /*db.collection('Users').findOne({ name : 'Jen'},(error, data)=>
        {
            if(error)
            {
                return console.log('unable to find user Jen')
            }
            console.log(data)
        })*/

        /*db.collection('Users').find({name:'Jen'}).toArray((error, users)=>
        {
            console.log(users)
        })*/

        /*db.collection('Users').insertOne({
            // _id : id,
            name : 'Pleobe',
            age : 25
        }, (error, result)=>{
            if(error)
            {
                return console.log('Unable to insert user')
            }
            console.log(result.ops)
        }) */

        /*db.collection('Tasks').insertMany([
            {
                description : 'ver 1',
                completed : true
            },
            {
                description : 'gitr  itmu',
                completed : false
            },
            {
                description : 'oeun  ir  urr tunufn',
                completed: false
            }
        ],(error, result)=>{
            if(error)
            {
                console.log('Unable to insert 3 rows')
            }
            console.log(result.ops)
        })*/
    })