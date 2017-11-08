const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()
const fs = require('fs')

app.use(serve(`${__dirname}/static`))

app.use(async (ctx, next) => {
    if (ctx.request.url === '/') {
        ctx.status = 200
        ctx.type = 'text/html'
        ctx.body = fs.createReadStream('./index.html') 
    }
    else {
        await next()
    }
    
})

app.use(async (ctx, next) => {
    if (ctx.request.url === '/getData') {
        ctx.status = 200
        ctx.type = ''
        ctx.body = JSON.stringify({
            status: 200
        })
    }
})

app.listen(3000)