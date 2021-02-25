// module.exports = [
//     { name: 'Ivan', age: 17 },
//     { name: 'Olga', age: 15 },
// ];
const {Schema,model}= require('mongoose')

const tokenSchema = {
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    }
};
const UserSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    age:{
        type: Number,
        require: false,
        default: 18
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: Number,
        require: true
    },
tokens: [tokenSchema],
    comment: {
    type: Schema.Types.Mixed
}
})
module.exports=model('users', UserSchema)

