const router = require('koa-router')();
const {SuccessModel, ErrorModel} = require('../model/resModel');
const { login } = require('../controller/user');

router.prefix('/users')

router.post('/login', async function  (ctx, next) {
  const { userName, userPassword } = ctx.request.body;
  const rows = login(userName, userPassword);

  if (userName === 'admin' && userPassword === '123456') {
    ctx.body = new SuccessModel(true)
    return
  }

  ctx.body = new ErrorModel(null, '用户名或者密码错误')
})
module.exports = router
