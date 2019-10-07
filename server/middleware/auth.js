module.exports = Options => {
    const AdminUser = require('../models/AdminUser')
    const keys = require('../config/key')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')//判断条件

    //登录校验中间件
    return async (req, res, next) => {
        //splice通过空格分裂,pop取最后一个
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')
        //校验解析token
        const { id } = jwt.verify(token, keys.key)
        assert(id, 401, '请先登录')
        //放在req后续接口也能使用
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()
    }
}
