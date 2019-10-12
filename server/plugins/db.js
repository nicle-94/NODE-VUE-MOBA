module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/node-vue', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    //models下面的所有文件夹都引用了一遍
    require('require-all')(__dirname + '/../models')
}