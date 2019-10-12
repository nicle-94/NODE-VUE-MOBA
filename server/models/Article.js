const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    title: {
        type: String
    },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: {
        type: String
    }
}, {
    //时间戳（创建时间，更新时间）
    timestamps: true
});
module.exports = mongoose.model('Article', Schema);