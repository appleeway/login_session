// require related modules in this project
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const validation = require('./validation.js')
const app = express()
const port = 3000

// set template engineer
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set session
app.use(session({
  secret: 'secret cat',
  cookie: { maxAge: 60 * 1000 }
}))

// set router
app.get('/', (req, res) => {
  if (!req.session.check) {
    res.render('index')
  } else {
    res.render('welcome', { sentence: 'We recognise you' })
  }
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const result = validation(email, password)
  req.session.check = result
  result ? res.render('welcome', { result }) : res.render('index', { alert: true })
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  return res.redirect('/')
})


// listening port
app.listen(port, () => {
  console.log(`Express server is listening on http://localhost:${port}`)
})