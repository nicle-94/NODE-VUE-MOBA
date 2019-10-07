const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        //密码返回值是否可见
        select: false,
        //设置密码
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
});
module.exports = mongoose.model('AdminUser', Schema);