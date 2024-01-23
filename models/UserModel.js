const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    des:{
        type : String,
        require : true
    },
    image:{
        type : String,
        require : true
    },
    date:{
        type: String,
        require : true
    }
})

const user = mongoose.model('user',userSchema);
module.exports = user;