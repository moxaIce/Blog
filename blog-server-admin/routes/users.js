const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', function (ctx, next) {
  const { userName, userPassword } = ctx.request.body;

  console.log(userName, userPassword)
  ctx.body = {
    userName,
    userPassword
  }
  // ctx.body = ctx.request.body
  // ctx.body = 2
})
module.exports = router
