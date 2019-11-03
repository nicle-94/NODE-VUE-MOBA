module.exports = app => {
    const AdminUser = require('../../models/AdminUser')
    const keys = require('../../config/key')
    const auth = require('../../middleware/auth')

    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')//判断条件

    const express = require('express')
    const router = express.Router()

    //创建资源
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    //删除资源
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })

    //获取列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName == 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })

    //资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })


    app.use('/admin/api/rest/:resource', auth(), async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    //获取文件中间件
    const multer = require('multer')
    //上传到uploads文件夹
    const upload = multer({ dest: __dirname + '../../../uploads' })
    app.use('/admin/api/upload', auth(), upload.single('file'), (req, res) => {
        const file = req.file
        file.url = `http://ma.wxywss.co/uploads/${file.filename}`
        res.send(file)
    })

    //登录
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        //查找用户名
        const user = await AdminUser.findOne({ username }).select('+password')//查的时候取出密码字段
        //1.用户存在,2.如果不存在状态码,3.message(抛出异常)
        assert(user, 422, '用户不存在')
        //校验密码
        const isValid = require('bcrypt').compareSync(password, user.password);
        assert(isValid, 422, '密码不正确')
        //返回token
        const token = jwt.sign({ id: user._id }, keys.key)//生成token
        res.send({
            token
        })
    })

    //捕获错误异常处理
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}