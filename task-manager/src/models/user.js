const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
        name : {
            type: String,
            required: true
        },
        email: {
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new Error('Invalid email')
                }
            }
        },
        password: {
            type:String,
            trim:true,
            required:true,
            validate(value){
                if(value.length <= 6)
                {
                    throw new Error('Password too short')
                }
                if(value.includes('password'))
                {
                    throw new Error('cannot contain password')
                }
            }
        },
        age : {
            type: Number,
            default:0,
            validate(value){
                if(value<0){
                    throw new Error('Age must be a positive numer')
                }
            }
        }
    })

    module.exports = User