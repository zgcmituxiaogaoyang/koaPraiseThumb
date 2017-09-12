const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
// const convert = require('koa-convert');
const path = require('path');
const co = require('co');
const render = require('koa-swig');
const app = new Koa();
const router = new Router();
//render
app.context.render = co.wrap(render({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));
// app.use(async ctx => ctx.body = await ctx.render('index'));
//router
router.get('/', (ctx, next) =>{
        // ctx.router available
        ctx.body = 'Hello World!';
    })
    .get('/index', async(ctx, next) =>{
        ctx.body = await ctx.render('index');
    });

app
    .use(router.routes())
    .use(router.allowedMethods());
//static
app.use(serve(path.join(__dirname,'./public')));
//listen port
app.listen(3000, () => {
    console.log("the Server is started!");
});