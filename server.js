const path = require('path')
const express = require('express');
const app = express()


app.use(express.static('assets'))
app.set('views', [
  path.join(__dirname, 'HTML')
])
app.set('view engine', 'ejs')
app.engine('html', require('ejs').__express)



app.get('/', (req, res, next) => {
  res.render('一般页面结构.html')
})
app.get('/target', (req, res, next) => {
  res.render('target指向.html')
})
app.get('/form', (req, res, next) => {
  res.render('表单.html')
})
app.get('/file', (req, res, next) => {
  res.render('文件.html')
})
app.get('/login', (req, res, next) => {
  res.render('登陆.html')
})
app.get('/table', (req, res, next) => {
  res.render('表格.html')
})
app.all('/updateProfile.action', (req, res, next) => {
  res.render('test.html', {message: 'update success!'})
})
app.all('/login.action', (req, res, next) => {
  res.render('test.html', {message: 'signed in!'})
})
app.get('/test', (req, res, next) => {
  res.render('test.html')
})


app.all('*', (req, res, next) => {
  res.status(404).send('404')
})


app.listen(3030, () => console.log('app listening on port 3030!'))

